/*When the datatable renders:
It sees type: 'customImage'
It looks inside CustomDataTable.customTypes
It finds this:{
  template: customImage, // 👈 this is the render function
  typeAttributes: ['title']
}
It executes customImage.html as a rendering function, injecting:
value → from fieldName: 'image' → image URL
typeAttributes.title → from the row’s title field
The customImage.html template receives those and renders:
*/
import { LightningElement } from 'lwc';
// we cannot declare constant in component cls
const COLUMNS = [
    { label: 'Title', fieldName: 'title' },
    { label: 'Description', fieldName: 'description' },
    { label: 'Price', fieldName: 'price', type: 'currency' },
    {
        label: 'Image',
        fieldName: 'image',
        type: 'customImage', // 👈 triggers the custom cell type
        typeAttributes: { title: { fieldName: 'title' } }
    }
];
//we have to create customType to show img

export default class DataTable extends LightningElement {
    product = [];
    columns = COLUMNS;

    connectedCallback() {
        this.getProduct();
    }

    async getProduct() {
        const response = await fetch('https://fakestoreapi.com/products');
        if (response.ok) {
            this.product = await response.json();
        }
    }
}