//import images
import rotiCanaiMenu from './images/menu/roti-canai-menu.jpg';
import thosaiMenu from './images/menu/thosai.jpeg';
import maggiGorengMenu from './images/menu/maggi-goreng-menu.jpg';
import cheeseNaanMenu from './images/menu/cheese-naan.jpg';
import rotiBakarMenu from './images/menu/roti-bakar-menu.jpg';
import halfBoiledEggsMenu from './images/menu/half-boiled-egg.jpg';

const menu = (function() {
    const initialize = () => {

    }
    
    const getMenuItems = () => {
        function createMenuItem(name, price, description, category, image) {
            return {
                name,
                price,
                description,
                category,
                image
            }
        };

        let menuItems = [];

        //Appetizers
        const rotiBakar = createMenuItem('Roti Bakar', 2.2, 'Toasted bread with kaya and margerine spread', 'Appetizer', rotiBakarMenu);
        menuItems.push(rotiBakar);

        const halfBoiledEggs = createMenuItem('Half-boiled eggs', 2.5, 'Eggs boiled to a soft, creamy yolk', 'Appetizer', halfBoiledEggsMenu);
        menuItems.push(halfBoiledEggs);

        //Main dishes
        const rotiCanai = createMenuItem('Roti Canai', 1.5, 'Soft and crispy flatbread served with curry and sambal', 'Main', rotiCanaiMenu);
        menuItems.push(rotiCanai)
        
        const thosai = createMenuItem('Thosai', 2, 'Savoury thin pancake made from rice flour served with chutney and dhal', 'Main', thosaiMenu);
        menuItems.push(thosai);

        const maggiGoreng = createMenuItem('Maggi Goreng', 6.5, 'Fried instant noodles stir-fried with vegetables, eggs, and tofu', 'Main', maggiGorengMenu);
        menuItems.push(maggiGoreng);

        const cheeseNaan = createMenuItem('Cheese Naan', 5.5, 'Soft and fluffy cheese stuffed in naan', 'Main', cheeseNaanMenu);
        menuItems.push(cheeseNaan);

        return menuItems;
    }
    
    return { initialize };
})