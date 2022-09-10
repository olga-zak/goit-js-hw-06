'use strict';

const arrayOfCategories = document.querySelectorAll('.item');

console.log(`Number of categories: ${arrayOfCategories.length}`);

for (const category of arrayOfCategories) {
  const catHeader = category.querySelector('h2').textContent;
  console.log(`Category: ${catHeader}`);

  const catListItems = category.querySelectorAll('li').length;
  console.log(`Elements: ${catListItems}`);
}
