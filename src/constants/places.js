const places = [
    {
        image: require('../assets/places/1.png'),
        name: 'Rama Casino',
        address: '5899 Rama Road, Rama, Ontario, Canada',
        coordinates: [{ lat: 44.6496, lng: -79.3453 }],
        description: 'Rama Casino is a world-class entertainment complex located on the Chippewas of Rama First Nation reserve in Ontario. It offers gaming, live performances, and fine dining, attracting visitors from around the world. Nearby cultural centers provide an opportunity to learn about the Chippewas’ history and traditions, making it a destination that combines entertainment with cultural enrichment.',
        fact: 'The casino is owned and operated by the Chippewas of Rama First Nation, providing economic empowerment, funding for community programs, and cultural preservation initiatives.'
    },
    {
        image: require('../assets/places/2.png'),
        name: 'Wanuskewin Heritage Park',
        address: 'RR #4, Penner Road, Saskatoon, Saskatchewan, Canada',
        coordinates: [{ lat: 52.1956, lng: -106.6082 }],
        description: 'Wanuskewin Heritage Park is an archaeological and cultural treasure in Saskatchewan, showcasing over 6,000 years of Indigenous history. Visitors can explore exhibits, trails, and cultural performances while gaining insights into the lives of the Northern Plains peoples. Traditional activities such as tipi raising and Indigenous art workshops make this an engaging educational experience.',
        fact: 'Wanuskewin celebrates the resilience of Indigenous cultures, serving as a vital resource for preserving and sharing the rich history of the Northern Plains peoples.'
    },
    {
        image: require('../assets/places/3.png'),
        name: 'The Forks National Historic Site',
        address: '1 Forks Market Road, Winnipeg, Manitoba, Canada',
        coordinates: [{ lat: 49.8872, lng: -97.1302 }],
        description: 'The Forks is a historic meeting place in Winnipeg where Indigenous peoples gathered for over 6,000 years to trade, celebrate, and build relationships. Today, it is a vibrant cultural hub featuring museums, art installations, markets, and public events. It bridges the past with the present through its unique blend of history and modern culture.',
        fact: 'The site honors its Indigenous roots through interpretive displays and programming, celebrating the cultural heritage of the First Nations and Métis peoples while fostering community connections.'
    },
    {
        image: require('../assets/places/4.png'),
        name: 'Haida Heritage Centre at Kay Llnagaay',
        address: '2 Second Beach Road, Skidegate, British Columbia, Canada',
        coordinates: [{ lat: 53.2506, lng: -132.0902 }],
        description: 'The Haida Heritage Centre at Kay Llnagaay is an award-winning cultural center located on the Haida Gwaii archipelago. It celebrates the art, history, and traditions of the Haida Nation through museum exhibits, carving workshops, and live performances. Surrounded by towering totem poles, the center offers an immersive experience into Haida culture and heritage.',
        fact: 'The center is vital in preserving and reviving Haida traditions and language, educating visitors about the enduring legacy of the Haida Nation.'
    },
    {
        image: require('../assets/places/5.png'),
        name: 'Kejimkujik National Park and National Historic Site',
        address: '3005 Kejimkujik Main Parkway, Maitland Bridge, Nova Scotia, Canada',
        coordinates: [{ lat: 44.4354, lng: -65.2187 }],
        description: 'Kejimkujik National Park is a remarkable blend of natural beauty and Indigenous heritage. Known for its ancient petroglyphs, canoe routes, and Mi’kmaq cultural significance, the park offers visitors activities such as stargazing, hiking, and cultural storytelling. It’s a serene sanctuary that highlights the deep spiritual connection of the Mi’kmaq to the land and water.',
        fact: 'Kejimkujik is a sacred site for the Mi’kmaq, reflecting their profound spiritual ties to the natural world and preserving their cultural heritage.'
    },
    {
        image: require('../assets/places/6.png'),
        name: 'Manitoulin Island',
        address: 'Various locations, Manitoulin Island, Ontario, Canada',
        coordinates: [{ lat: 45.9128, lng: -81.9220 }],
        description: 'Manitoulin Island, the largest freshwater island in the world, is home to several Anishinaabe communities. It offers pristine natural landscapes, vibrant powwows, and cultural experiences such as the Great Spirit Circle Trail. Visitors can immerse themselves in the island’s unique blend of spirituality, culture, and breathtaking scenery.',
        fact: 'Manitoulin Island is a spiritual and cultural hub for the Anishinaabe people, where traditions and knowledge have been passed down through generations, enriching the lives of locals and visitors alike.'
    },
    {
        image: require('../assets/places/7.png'),
        name: 'Gwaii Haanas National Park Reserve',
        address: 'Haida Gwaii Archipelago, British Columbia, Canada',
        coordinates: [{ lat: 52.4817, lng: -131.1520 }],
        description: 'Gwaii Haanas National Park Reserve, located in the Haida Gwaii archipelago, is a UNESCO World Heritage Site that preserves the natural beauty and cultural heritage of the Haida Nation. Visitors can explore ancient village sites, marvel at the majestic totem poles, and immerse themselves in the untouched wilderness of this remote region.',
        fact: 'Co-managed by the Haida Nation and the Canadian government, the park is a symbol of reconciliation and respect for Indigenous sovereignty, safeguarding Haida traditions and the pristine environment.'
    },
    {
        image: require('../assets/places/8.png'),
        name: 'Batoche National Historic Site',
        address: 'Highway 225, Batoche, Saskatchewan, Canada',
        coordinates: [{ lat: 52.7156, lng: -106.1006 }],
        description: 'Batoche National Historic Site marks the location of the 1885 Métis resistance led by Louis Riel. Visitors can tour historical buildings, engage with exhibits about Métis culture, and learn about their fight for rights and recognition during a pivotal moment in Canadian history.',
        fact: 'Batoche stands as a symbol of Métis resilience and their ongoing efforts to preserve their cultural heritage and share their story with future generations.'
    },
    {
        image: require('../assets/places/9.png'),
        name: 'Nitinaht Lake',
        address: 'Nitinaht Village, Vancouver Island, British Columbia, Canada',
        coordinates: [{ lat: 48.6756, lng: -124.4461 }],
        description: 'Nitinaht Lake, nestled in Vancouver Island’s lush forests, is renowned for its natural beauty and is a popular destination for kiteboarding, hiking, and nature exploration. This pristine lake is part of the traditional territory of the Ditidaht First Nation, whose cultural practices are deeply connected to the area.',
        fact: 'The lake is central to Ditidaht cultural traditions, serving as a hub for storytelling, food gathering, and other practices that sustain their identity and connection to the land.'
    },
    {
        image: require('../assets/places/10.png'),
        name: 'Dawson City',
        address: 'Various locations, Dawson City, Yukon, Canada',
        coordinates: [{ lat: 64.0601, lng: -139.4320 }],
        description: 'Dawson City, located in Yukon, was the heart of the Klondike Gold Rush. Rich in Indigenous and settler history, it highlights the pivotal role of the Tr’ondëk Hwëch’in people during this transformative era. Visitors can explore historical sites and learn about the cultural exchange between Indigenous communities and gold seekers.',
        fact: 'The city sheds light on the contributions and challenges faced by the Tr’ondëk Hwëch’in people during one of the most significant periods in Canadian history.'
    },
    {
        image: require('../assets/places/11.png'),
        name: 'Canadian Museum for Human Rights',
        address: '85 Israel Asper Way, Winnipeg, Manitoba, Canada',
        coordinates: [{ lat: 49.8873, lng: -97.1308 }],
        description: 'The Canadian Museum for Human Rights in Winnipeg is dedicated to promoting human rights education and dialogue. With exhibits on Indigenous experiences, residential schools, and reconciliation, the museum fosters understanding and awareness of Canada’s history and the importance of activism.',
        fact: 'The museum highlights the resilience of Indigenous communities through powerful stories, encouraging visitors to reflect on the past and work towards a more inclusive future.'
    },
    {
        image: require('../assets/places/12.png'),
        name: 'Fort William Historical Park',
        address: '1350 King Road, Thunder Bay, Ontario, Canada',
        coordinates: [{ lat: 48.3738, lng: -89.3286 }],
        description: 'Fort William Historical Park in Thunder Bay is a reconstruction of a fur trading post that was vital to 19th-century commerce. The site showcases the collaboration between Europeans and the Ojibwe people, offering immersive reenactments and educational exhibits about life during that era.',
        fact: 'The park highlights the integral role of Indigenous peoples in the fur trade and their lasting impact on Canada’s economic and cultural development.'
    }
];

export default places;