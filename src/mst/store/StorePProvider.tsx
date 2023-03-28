import RootStore from "./RootStore";

const storeProvider = RootStore.create({
    contents:[
        {
            id: '1',
            title: 'Name',
            description: 'Type same text',
            seen: false,
            notes: '',
        },
        {
            id: '2',
            title: "Dealer's name",
            description: 'Type same text',
            seen: false,
            notes: '',

        },
        {
            id: '3',
            title: 'Country name',
            description: 'Type same text',
            seen: false,
            notes: '',

        },
        {
            id: '4',
            title: 'Car Name',
            description: 'Some text',
            seen: true,
            notes: 'Some',

        }
    ]
})

export default storeProvider;