const topCategories = document.querySelectorAll('#categories > .item');
const quantityTopCategories = topCategories.length;

console.log(`Number of categories: ${quantityTopCategories}`);

topCategories.forEach(category => {
    const headingText = category.querySelector('h2')?.textContent.trim();
    const itemCount = category.querySelectorAll('ul > li').length;

    console.log(`Category: ${headingText}`);
    console.log(`Elements ${itemCount}`);
});
