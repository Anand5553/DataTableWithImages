/*
⚠️ You cannot use customDataTable.html when extending lightning/datatable, because components that extend LightningDatatable do not support templates of their own.

In LWC, when you import an .html file like this, you’re importing it as a render function — not as a string, or a component name
*/
import LightningDatatable from 'lightning/datatable';
import customImage from './customImage.html';

export default class CustomDataTable extends LightningDatatable {
    static customTypes = {
        customImage: {
            template: customImage,
            typeAttributes: ['title']
        }
    };
}
