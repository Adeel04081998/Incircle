import svgs from "../assets/svgs";
import StoredImages from "../res/StoredImages";

export default {
    "CATEGORIES_TYPES": [
        {
            value: 1,
            text: "Incircle Businesses",
            icon: svgs.Incircle_BusinessCategryIcon(),
        },
        {
            value: 2,
            text: "Incircle Vehicles",
            icon: svgs.Delivery_ServiceCategoryIcon(),

        },
        {
            value: 3,
            text: "Trade Deals",
            icon: svgs.Trade_Deals_CategoryIcon(),

        },

    ],
    "INCIRCLE_FEEDS": [
        { id: 1, catTitle: 'Al faisal mall', catType: "Jobs", icon: StoredImages.LuckyDraw },
        { id: 2, catTitle: 'Al faisal mall', catType: "Offers", icon: StoredImages.LuckyDraw },
        { id: 3, catTitle: 'Al faisal mall', catType: "Event", icon: StoredImages.LuckyDraw },
    ],
    'TABS_ARR': [
        { id: 1, field: "email", placeholder: 'Email', validationerror: "Invalid email address", },
        { id: 2, field: "password", placeholder: 'Password', validationerror: "Invalid password", },
        { id: 3, field: "cc", placeholder: 'Password', validationerror: "Invalid password", },
        { id: 4, field: "cpddpd", placeholder: 'Password', validationerror: "Invalid password", },
        { id: 5, field: "m,,,.,", placeholder: 'Password', validationerror: "Invalid password", },
        { id: 5, field: "m,,,.,", placeholder: 'Password', validationerror: "Invalid password", },
    ],

}