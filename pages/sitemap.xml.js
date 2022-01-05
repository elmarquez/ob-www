// @see https://cheatcode.co/tutorials/how-to-generate-a-dynamic-sitemap-with-next-js
import React from "react";
import fs from "fs";
import pkg from '../package.json'

const Sitemap = () => { };

export const getServerSideProps = ({ res }) => {
        const baseUrl = {
        development: "http://localhost:5000",
        production: `https://${pkg.config.domain}`,
    }[process.env.NODE_ENV];

    const excludes = [
        "_app.js",
        "_document.js",
        "_error.js",
        "404.js",
        "sitemap.xml.js",
    ]
    const staticPages = fs
        .readdirSync("pages")
        .filter((page) => !excludes.includes(page))
        .map((page) => page.endsWith('index.js') ? `${baseUrl}` : `${baseUrl}/${page}`);

    const sitemap = `<?xml version="1.0" encoding="UTF-8"?>
    <urlset xmlns="http://www.sitemaps.org/schemas/sitemap/0.9">
      ${staticPages
            .map((url) => {
                return `
            <url>
              <loc>${url}</loc>
              <lastmod>${new Date().toISOString()}</lastmod>
              <changefreq>monthly</changefreq>
              <priority>1.0</priority>
            </url>
          `;
            })
            .join("")}
    </urlset>
  `;

    res.setHeader("Content-Type", "text/xml");
    res.write(sitemap);
    res.end();

    return {
        props: {},
    };
};

export default Sitemap;