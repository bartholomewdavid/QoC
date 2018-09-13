import React from 'react';

export function FormatDate(input) {
  const date = new Date(input);

  // MM/DD/YYYY
  return `${date.getMonth()}/${date.getDate()}/${date.getFullYear()}`;
}

export function FormatCurrency(input) {
  // We did not want $, only to truncate smaller decimals.

  return Number(input).toFixed(2);
}

// This is a terribly dangerous practice, especially using an external API.
// I am only doing this because it does not appear that there are any simple solutions
// that I could find to deal with dynamic text to jsx templates.
export function FormatSummary(input) {
  let rawHTML = input;

  // Paragraphs
  rawHTML = `<p>${rawHTML}</p>`;
  rawHTML = rawHTML.replace(/\n\n/gi, '</p><p>');

  // Single Breaks
  rawHTML = rawHTML.replace(/\n/gi, '<br/>');

  // Courtesy of https://stackoverflow.com/questions/3809401/what-is-a-good-regular-expression-to-match-a-url
  const httpRegex = /https?:\/\/(www\.)?[-a-zA-Z0-9@:%._+~#=]{2,256}\.[a-z]{2,6}\b([-a-zA-Z0-9@:%_+.~#?&//=]*)/gi;
  rawHTML = rawHTML.replace(httpRegex, (match) => {
    return `<a href="${match}">${match}</a>`;
  });

  // Additional templating could go here if desired, I don't know every case they have.

  return {
    __html: rawHTML
  };
}
