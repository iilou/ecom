'use client';

import { useRouter } from "next/navigation";
import { useState } from "react";
import Image from "next/image";

export default function Home() {
    const dat_raw = `id	name	desc	promo	bundle	price	category	properties
p001	Rose Floral fruit	A soothing floral fruit with hints of rose, perfect for any moment.	Enjoy your floral fruit with a cozy mug for a complete experience.	[]	9.03	['coffee & teas', 'floral fruit']	{'flavor': 'rose', 'caffeine': True}
p002	Moth Earring	A charming earrings inspired by the grace of the moth.	Pair your earrings with a matching pin for a nature-themed bundle!	[]	5.36	['garden creature accessories', 'earrings']	{'creature': 'moth'}
p003	Chamomile Herbal teas	A soothing herbal teas with hints of chamomile, perfect for any moment.	Enjoy your herbal teas with a cozy mug for a complete experience.	[]	5.73	['coffee & teas', 'herbal teas']	{'flavor': 'chamomile', 'caffeine': False}
p004	Moth Pin	A charming pins inspired by the grace of the moth.	Pair your pins with a matching pin for a nature-themed bundle!	[]	33.04	['garden creature accessories', 'pins']	{'creature': 'moth'}
p005	Mocha Coffee	A soothing coffee with hints of mocha, perfect for any moment.	Enjoy your coffee with a cozy mug for a complete experience.	[]	7.14	['coffee & teas', 'coffee']	{'flavor': 'mocha', 'caffeine': True}
p006	Nutmeg Coffee	A soothing coffee with hints of nutmeg, perfect for any moment.	Enjoy your coffee with a cozy mug for a complete experience.	[]	17.21	['coffee & teas', 'coffee']	{'flavor': 'nutmeg', 'caffeine': True}
p007	Dragonfly Tote bag	A charming tote bags inspired by the grace of the dragonfly.	Pair your tote bags with a matching pin for a nature-themed bundle!	[]	38.11	['garden creature accessories', 'tote bags']	{'creature': 'dragonfly'}
p008	Bee Hair accessorie	A charming hair accessories inspired by the grace of the bee.	Pair your hair accessories with a matching pin for a nature-themed bundle!	[]	9.34	['garden creature accessories', 'hair accessories']	{'creature': 'bee'}
p009	Butterfly Charm	A charming charms inspired by the grace of the butterfly.	Pair your charms with a matching pin for a nature-themed bundle!	[]	13.62	['garden creature accessories', 'charms']	{'creature': 'butterfly'}
p010	Rose Herbal teas	A soothing herbal teas with hints of rose, perfect for any moment.	Enjoy your herbal teas with a cozy mug for a complete experience.	[]	16.2	['coffee & teas', 'herbal teas']	{'flavor': 'rose', 'caffeine': True}
p011	Jasmine Floral fruit	A soothing floral fruit with hints of jasmine, perfect for any moment.	Enjoy your floral fruit with a cozy mug for a complete experience.	[]	32.67	['coffee & teas', 'floral fruit']	{'flavor': 'jasmine', 'caffeine': True}
p012	Bee Charm	A charming charms inspired by the grace of the bee.	Pair your charms with a matching pin for a nature-themed bundle!	[]	8.55	['garden creature accessories', 'charms']	{'creature': 'bee'}
p013	Lavender Mugs	A soothing mugs with hints of lavender, perfect for any moment.	Enjoy your mugs with a cozy mug for a complete experience.	[]	33.95	['coffee & teas', 'mugs']	{'flavor': 'lavender'}
p014	Butterfly Pin	A charming pins inspired by the grace of the butterfly.	Pair your pins with a matching pin for a nature-themed bundle!	[]	24.56	['garden creature accessories', 'pins']	{'creature': 'butterfly'}
p015	Lavender Herbal teas	A soothing herbal teas with hints of lavender, perfect for any moment.	Enjoy your herbal teas with a cozy mug for a complete experience.	[]	13.64	['coffee & teas', 'herbal teas']	{'flavor': 'lavender', 'caffeine': False}
p016	Bee Hair accessorie 1	A charming hair accessories inspired by the grace of the bee.	Pair your hair accessories with a matching pin for a nature-themed bundle!	[]	18.43	['garden creature accessories', 'hair accessories']	{'creature': 'bee'}
p017	Jasmine Mugs	A soothing mugs with hints of jasmine, perfect for any moment.	Enjoy your mugs with a cozy mug for a complete experience.	[]	20.97	['coffee & teas', 'mugs']	{'flavor': 'jasmine'}
p018	Mint Floral fruit	A soothing floral fruit with hints of mint, perfect for any moment.	Enjoy your floral fruit with a cozy mug for a complete experience.	[]	27.7	['coffee & teas', 'floral fruit']	{'flavor': 'mint', 'caffeine': True}
p019	Dragonfly Charm	A charming charms inspired by the grace of the dragonfly.	Pair your charms with a matching pin for a nature-themed bundle!	[]	18.12	['garden creature accessories', 'charms']	{'creature': 'dragonfly'}
p020	Dragonfly Pin	A charming pins inspired by the grace of the dragonfly.	Pair your pins with a matching pin for a nature-themed bundle!	[]	10.24	['garden creature accessories', 'pins']	{'creature': 'dragonfly'}
p021	Beetle Earring	A charming earrings inspired by the grace of the beetle.	Pair your earrings with a matching pin for a nature-themed bundle!	[]	18.49	['garden creature accessories', 'earrings']	{'creature': 'beetle'}
p022	Rose Mugs	A soothing mugs with hints of rose, perfect for any moment.	Enjoy your mugs with a cozy mug for a complete experience.	[]	7.95	['coffee & teas', 'mugs']	{'flavor': 'rose'}
p023	Dragonfly Earring	A charming earrings inspired by the grace of the dragonfly.	Pair your earrings with a matching pin for a nature-themed bundle!	[]	5.97	['garden creature accessories', 'earrings']	{'creature': 'dragonfly'}
p024	Hazelnut Coffee	A soothing coffee with hints of hazelnut, perfect for any moment.	Enjoy your coffee with a cozy mug for a complete experience.	[]	11.02	['coffee & teas', 'coffee']	{'flavor': 'hazelnut', 'caffeine': False}
p025	Moth Tote bag	A charming tote bags inspired by the grace of the moth.	Pair your tote bags with a matching pin for a nature-themed bundle!	[]	6.99	['garden creature accessories', 'tote bags']	{'creature': 'moth'}
p026	Dragonfly Charm 1	A charming charms inspired by the grace of the dragonfly.	Pair your charms with a matching pin for a nature-themed bundle!	[]	8.59	['garden creature accessories', 'charms']	{'creature': 'dragonfly'}
p027	Chamomile Floral fruit	A soothing floral fruit with hints of chamomile, perfect for any moment.	Enjoy your floral fruit with a cozy mug for a complete experience.	[]	7.99	['coffee & teas', 'floral fruit']	{'flavor': 'chamomile', 'caffeine': False}
p028	Mint Mugs	A soothing mugs with hints of mint, perfect for any moment.	Enjoy your mugs with a cozy mug for a complete experience.	[]	25.68	['coffee & teas', 'mugs']	{'flavor': 'mint'}
p029	Rose Floral fruit 1	A soothing floral fruit with hints of rose, perfect for any moment.	Enjoy your floral fruit with a cozy mug for a complete experience.	[]	15.22	['coffee & teas', 'floral fruit']	{'flavor': 'rose', 'caffeine': False}
p030	Dragonfly Tote bag 1	A charming tote bags inspired by the grace of the dragonfly.	Pair your tote bags with a matching pin for a nature-themed bundle!	[]	16.99	['garden creature accessories', 'tote bags']	{'creature': 'dragonfly'}
p031	Mint Herbal teas	A soothing herbal teas with hints of mint, perfect for any moment.	Enjoy your herbal teas with a cozy mug for a complete experience.	[]	6.25	['coffee & teas', 'herbal teas']	{'flavor': 'mint', 'caffeine': False}
p032	Beetle Earring 1	A charming earrings inspired by the grace of the beetle.	Pair your earrings with a matching pin for a nature-themed bundle!	[]	15.54	['garden creature accessories', 'earrings']	{'creature': 'beetle'}
p033	Dragonfly Hair accessorie	A charming hair accessories inspired by the grace of the dragonfly.	Pair your hair accessories with a matching pin for a nature-themed bundle!	[]	13.36	['garden creature accessories', 'hair accessories']	{'creature': 'dragonfly'}
p034	Butterfly Earring	A charming earrings inspired by the grace of the butterfly.	Pair your earrings with a matching pin for a nature-themed bundle!	[]	7.23	['garden creature accessories', 'earrings']	{'creature': 'butterfly'}
p035	Vanilla Coffee	A soothing coffee with hints of vanilla, perfect for any moment.	Enjoy your coffee with a cozy mug for a complete experience.	[]	12.55	['coffee & teas', 'coffee']	{'flavor': 'vanilla', 'caffeine': True}
p036	Mint Herbal teas 1	A soothing herbal teas with hints of mint, perfect for any moment.	Enjoy your herbal teas with a cozy mug for a complete experience.	[]	6.88	['coffee & teas', 'herbal teas']	{'flavor': 'mint', 'caffeine': True}
p037	Bee Charm 1	A charming charms inspired by the grace of the bee.	Pair your charms with a matching pin for a nature-themed bundle!	[]	6.84	['garden creature accessories', 'charms']	{'creature': 'bee'}
p038	Moth Tote bag 1	A charming tote bags inspired by the grace of the moth.	Pair your tote bags with a matching pin for a nature-themed bundle!	[]	9.86	['garden creature accessories', 'tote bags']	{'creature': 'moth'}
p039	Rose Mugs 1	A soothing mugs with hints of rose, perfect for any moment.	Enjoy your mugs with a cozy mug for a complete experience.	[]	18.56	['coffee & teas', 'mugs']	{'flavor': 'rose'}
p040	Bee Charm 2	A charming charms inspired by the grace of the bee.	Pair your charms with a matching pin for a nature-themed bundle!	[]	37.4	['garden creature accessories', 'charms']	{'creature': 'bee'}
p041	Dragonfly Hair accessorie 1	A charming hair accessories inspired by the grace of the dragonfly.	Pair your hair accessories with a matching pin for a nature-themed bundle!	[]	13.29	['garden creature accessories', 'hair accessories']	{'creature': 'dragonfly'}
p042	Mint Herbal teas 2	A soothing herbal teas with hints of mint, perfect for any moment.	Enjoy your herbal teas with a cozy mug for a complete experience.	[]	8.13	['coffee & teas', 'herbal teas']	{'flavor': 'mint', 'caffeine': False}
p043	Beetle Pin	A charming pins inspired by the grace of the beetle.	Pair your pins with a matching pin for a nature-themed bundle!	[]	20.09	['garden creature accessories', 'pins']	{'creature': 'beetle'}
p044	Chamomile Floral fruit 1	A soothing floral fruit with hints of chamomile, perfect for any moment.	Enjoy your floral fruit with a cozy mug for a complete experience.	[]	10.53	['coffee & teas', 'floral fruit']	{'flavor': 'chamomile', 'caffeine': False}
p045	Dragonfly Pin 1	A charming pins inspired by the grace of the dragonfly.	Pair your pins with a matching pin for a nature-themed bundle!	[]	34.84	['garden creature accessories', 'pins']	{'creature': 'dragonfly'}
p046	Mint Herbal teas 3	A soothing herbal teas with hints of mint, perfect for any moment.	Enjoy your herbal teas with a cozy mug for a complete experience.	[]	7.05	['coffee & teas', 'herbal teas']	{'flavor': 'mint', 'caffeine': True}
p047	Lavender Herbal teas 1	A soothing herbal teas with hints of lavender, perfect for any moment.	Enjoy your herbal teas with a cozy mug for a complete experience.	[]	38.75	['coffee & teas', 'herbal teas']	{'flavor': 'lavender', 'caffeine': True}
p048	Dragonfly Hair accessorie 2	A charming hair accessories inspired by the grace of the dragonfly.	Pair your hair accessories with a matching pin for a nature-themed bundle!	[]	5.92	['garden creature accessories', 'hair accessories']	{'creature': 'dragonfly'}
p049	Moth Tote bag 2	A charming tote bags inspired by the grace of the moth.	Pair your tote bags with a matching pin for a nature-themed bundle!	[]	15.88	['garden creature accessories', 'tote bags']	{'creature': 'moth'}
p050	Mint Herbal teas 4	A soothing herbal teas with hints of mint, perfect for any moment.	Enjoy your herbal teas with a cozy mug for a complete experience.	[]	10.06	['coffee & teas', 'herbal teas']	{'flavor': 'mint', 'caffeine': True}
p051	Rose Floral fruit 2	A soothing floral fruit with hints of rose, perfect for any moment.	Enjoy your floral fruit with a cozy mug for a complete experience.	[]	8.8	['coffee & teas', 'floral fruit']	{'flavor': 'rose', 'caffeine': True}
p052	Chamomile Floral fruit 2	A soothing floral fruit with hints of chamomile, perfect for any moment.	Enjoy your floral fruit with a cozy mug for a complete experience.	[]	7.39	['coffee & teas', 'floral fruit']	{'flavor': 'chamomile', 'caffeine': False}
p053	Rose Floral fruit 3	A soothing floral fruit with hints of rose, perfect for any moment.	Enjoy your floral fruit with a cozy mug for a complete experience.	[]	28.83	['coffee & teas', 'floral fruit']	{'flavor': 'rose', 'caffeine': False}
p054	Bee Tote bag	A charming tote bags inspired by the grace of the bee.	Pair your tote bags with a matching pin for a nature-themed bundle!	[]	20.74	['garden creature accessories', 'tote bags']	{'creature': 'bee'}
p055	Jasmine Herbal teas	A soothing herbal teas with hints of jasmine, perfect for any moment.	Enjoy your herbal teas with a cozy mug for a complete experience.	[]	15.19	['coffee & teas', 'herbal teas']	{'flavor': 'jasmine', 'caffeine': True}
p056	Beetle Charm	A charming charms inspired by the grace of the beetle.	Pair your charms with a matching pin for a nature-themed bundle!	[]	24.04	['garden creature accessories', 'charms']	{'creature': 'beetle'}
p057	Caramel Coffee	A soothing coffee with hints of caramel, perfect for any moment.	Enjoy your coffee with a cozy mug for a complete experience.	[]	8.05	['coffee & teas', 'coffee']	{'flavor': 'caramel', 'caffeine': False}
p058	Butterfly Hair accessorie	A charming hair accessories inspired by the grace of the butterfly.	Pair your hair accessories with a matching pin for a nature-themed bundle!	[]	12.7	['garden creature accessories', 'hair accessories']	{'creature': 'butterfly'}
p059	Bee Earring	A charming earrings inspired by the grace of the bee.	Pair your earrings with a matching pin for a nature-themed bundle!	[]	26.64	['garden creature accessories', 'earrings']	{'creature': 'bee'}
p060	Bee Earring 1	A charming earrings inspired by the grace of the bee.	Pair your earrings with a matching pin for a nature-themed bundle!	[]	10.08	['garden creature accessories', 'earrings']	{'creature': 'bee'}
p061	Rose Floral fruit 4	A soothing floral fruit with hints of rose, perfect for any moment.	Enjoy your floral fruit with a cozy mug for a complete experience.	[]	5.22	['coffee & teas', 'floral fruit']	{'flavor': 'rose', 'caffeine': True}
p062	Rose Herbal teas 1	A soothing herbal teas with hints of rose, perfect for any moment.	Enjoy your herbal teas with a cozy mug for a complete experience.	[]	21.2	['coffee & teas', 'herbal teas']	{'flavor': 'rose', 'caffeine': True}
p063	Jasmine Herbal teas 1	A soothing herbal teas with hints of jasmine, perfect for any moment.	Enjoy your herbal teas with a cozy mug for a complete experience.	[]	11.38	['coffee & teas', 'herbal teas']	{'flavor': 'jasmine', 'caffeine': True}
p064	Chamomile Mugs	A soothing mugs with hints of chamomile, perfect for any moment.	Enjoy your mugs with a cozy mug for a complete experience.	[]	17.53	['coffee & teas', 'mugs']	{'flavor': 'chamomile'}
p065	Beetle Pin 1	A charming pins inspired by the grace of the beetle.	Pair your pins with a matching pin for a nature-themed bundle!	[]	33.84	['garden creature accessories', 'pins']	{'creature': 'beetle'}
p066	Lavender Floral fruit	A soothing floral fruit with hints of lavender, perfect for any moment.	Enjoy your floral fruit with a cozy mug for a complete experience.	[]	12.62	['coffee & teas', 'floral fruit']	{'flavor': 'lavender', 'caffeine': True}
p067	Moth Hair accessorie	A charming hair accessories inspired by the grace of the moth.	Pair your hair accessories with a matching pin for a nature-themed bundle!	[]	12.92	['garden creature accessories', 'hair accessories']	{'creature': 'moth'}
p068	Rose Floral fruit 5	A soothing floral fruit with hints of rose, perfect for any moment.	Enjoy your floral fruit with a cozy mug for a complete experience.	[]	24.79	['coffee & teas', 'floral fruit']	{'flavor': 'rose', 'caffeine': False}
p069	Dragonfly Charm 2	A charming charms inspired by the grace of the dragonfly.	Pair your charms with a matching pin for a nature-themed bundle!	[]	6.59	['garden creature accessories', 'charms']	{'creature': 'dragonfly'}
p070	Butterfly Earring 1	A charming earrings inspired by the grace of the butterfly.	Pair your earrings with a matching pin for a nature-themed bundle!	[]	22.64	['garden creature accessories', 'earrings']	{'creature': 'butterfly'}
p071	Bee Pin	A charming pins inspired by the grace of the bee.	Pair your pins with a matching pin for a nature-themed bundle!	[]	27.63	['garden creature accessories', 'pins']	{'creature': 'bee'}
p072	Bee Pin 1	A charming pins inspired by the grace of the bee.	Pair your pins with a matching pin for a nature-themed bundle!	[]	27.75	['garden creature accessories', 'pins']	{'creature': 'bee'}
p073	Beetle Pin 2	A charming pins inspired by the grace of the beetle.	Pair your pins with a matching pin for a nature-themed bundle!	[]	13.19	['garden creature accessories', 'pins']	{'creature': 'beetle'}
p074	Butterfly Tote bag	A charming tote bags inspired by the grace of the butterfly.	Pair your tote bags with a matching pin for a nature-themed bundle!	[]	20.86	['garden creature accessories', 'tote bags']	{'creature': 'butterfly'}
p075	Dragonfly Earring 1	A charming earrings inspired by the grace of the dragonfly.	Pair your earrings with a matching pin for a nature-themed bundle!	[]	6.52	['garden creature accessories', 'earrings']	{'creature': 'dragonfly'}
p076	Butterfly Tote bag 1	A charming tote bags inspired by the grace of the butterfly.	Pair your tote bags with a matching pin for a nature-themed bundle!	[]	12.33	['garden creature accessories', 'tote bags']	{'creature': 'butterfly'}
p077	Beetle Tote bag	A charming tote bags inspired by the grace of the beetle.	Pair your tote bags with a matching pin for a nature-themed bundle!	[]	9.54	['garden creature accessories', 'tote bags']	{'creature': 'beetle'}
p078	Rose Mugs 2	A soothing mugs with hints of rose, perfect for any moment.	Enjoy your mugs with a cozy mug for a complete experience.	[]	22.24	['coffee & teas', 'mugs']	{'flavor': 'rose'}
p079	Jasmine Mugs 1	A soothing mugs with hints of jasmine, perfect for any moment.	Enjoy your mugs with a cozy mug for a complete experience.	[]	21	['coffee & teas', 'mugs']	{'flavor': 'jasmine'}
p080	Moth Pin 1	A charming pins inspired by the grace of the moth.	Pair your pins with a matching pin for a nature-themed bundle!	[]	39.05	['garden creature accessories', 'pins']	{'creature': 'moth'}
p081	Vanilla Coffee 1	A soothing coffee with hints of vanilla, perfect for any moment.	Enjoy your coffee with a cozy mug for a complete experience.	[]	14.73	['coffee & teas', 'coffee']	{'flavor': 'vanilla', 'caffeine': True}
p082	Chamomile Herbal teas 1	A soothing herbal teas with hints of chamomile, perfect for any moment.	Enjoy your herbal teas with a cozy mug for a complete experience.	[]	19.96	['coffee & teas', 'herbal teas']	{'flavor': 'chamomile', 'caffeine': True}
p083	Moth Hair accessorie 1	A charming hair accessories inspired by the grace of the moth.	Pair your hair accessories with a matching pin for a nature-themed bundle!	[]	10.61	['garden creature accessories', 'hair accessories']	{'creature': 'moth'}
p084	Dragonfly Hair accessorie 3	A charming hair accessories inspired by the grace of the dragonfly.	Pair your hair accessories with a matching pin for a nature-themed bundle!	[]	13.42	['garden creature accessories', 'hair accessories']	{'creature': 'dragonfly'}
p085	Lavender Mugs 1	A soothing mugs with hints of lavender, perfect for any moment.	Enjoy your mugs with a cozy mug for a complete experience.	[]	16.55	['coffee & teas', 'mugs']	{'flavor': 'lavender'}
p086	Hazelnut Coffee 1	A soothing coffee with hints of hazelnut, perfect for any moment.	Enjoy your coffee with a cozy mug for a complete experience.	[]	16.49	['coffee & teas', 'coffee']	{'flavor': 'hazelnut', 'caffeine': True}
p087	Chamomile Mugs 1	A soothing mugs with hints of chamomile, perfect for any moment.	Enjoy your mugs with a cozy mug for a complete experience.	[]	8.58	['coffee & teas', 'mugs']	{'flavor': 'chamomile'}
p088	Jasmine Mugs 2	A soothing mugs with hints of jasmine, perfect for any moment.	Enjoy your mugs with a cozy mug for a complete experience.	[]	7.87	['coffee & teas', 'mugs']	{'flavor': 'jasmine'}
p089	Dragonfly Earring 2	A charming earrings inspired by the grace of the dragonfly.	Pair your earrings with a matching pin for a nature-themed bundle!	[]	7.15	['garden creature accessories', 'earrings']	{'creature': 'dragonfly'}
p090	Mint Herbal teas 5	A soothing herbal teas with hints of mint, perfect for any moment.	Enjoy your herbal teas with a cozy mug for a complete experience.	[]	21.7	['coffee & teas', 'herbal teas']	{'flavor': 'mint', 'caffeine': False}
p091	Rose Floral fruit 6	A soothing floral fruit with hints of rose, perfect for any moment.	Enjoy your floral fruit with a cozy mug for a complete experience.	[]	21.09	['coffee & teas', 'floral fruit']	{'flavor': 'rose', 'caffeine': False}
p092	Moth Hair accessorie 2	A charming hair accessories inspired by the grace of the moth.	Pair your hair accessories with a matching pin for a nature-themed bundle!	[]	32.73	['garden creature accessories', 'hair accessories']	{'creature': 'moth'}
p093	Bee Tote bag 1	A charming tote bags inspired by the grace of the bee.	Pair your tote bags with a matching pin for a nature-themed bundle!	[]	34.57	['garden creature accessories', 'tote bags']	{'creature': 'bee'}
p094	Beetle Pin 3	A charming pins inspired by the grace of the beetle.	Pair your pins with a matching pin for a nature-themed bundle!	[]	27.53	['garden creature accessories', 'pins']	{'creature': 'beetle'}
p095	Bee Charm 3	A charming charms inspired by the grace of the bee.	Pair your charms with a matching pin for a nature-themed bundle!	[]	19.35	['garden creature accessories', 'charms']	{'creature': 'bee'}
p096	Moth Earring 1	A charming earrings inspired by the grace of the moth.	Pair your earrings with a matching pin for a nature-themed bundle!	[]	18.12	['garden creature accessories', 'earrings']	{'creature': 'moth'}
p097	Moth Charm	A charming charms inspired by the grace of the moth.	Pair your charms with a matching pin for a nature-themed bundle!	[]	19.51	['garden creature accessories', 'charms']	{'creature': 'moth'}
p098	Butterfly Tote bag 2	A charming tote bags inspired by the grace of the butterfly.	Pair your tote bags with a matching pin for a nature-themed bundle!	[]	30.28	['garden creature accessories', 'tote bags']	{'creature': 'butterfly'}
p099	Dragonfly Earring 3	A charming earrings inspired by the grace of the dragonfly.	Pair your earrings with a matching pin for a nature-themed bundle!	[]	9.76	['garden creature accessories', 'earrings']	{'creature': 'dragonfly'}
p100	Dragonfly Charm 3	A charming charms inspired by the grace of the dragonfly.	Pair your charms with a matching pin for a nature-themed bundle!	[]	16.64	['garden creature accessories', 'charms']	{'creature': 'dragonfly'}`;

    const headers = dat_raw.split('\n')[0].split('\t');
    const data = dat_raw.split('\n').slice(1).map(row => {
        const values = row.split('\t');
        return headers.reduce((obj, header, index) => {
            if (header === 'properties') {
                // console.log(values[index]);
                obj[header] = JSON.parse(values[index].replace(/'/g, '"').replace(/\bFalse\b/g, '\"false\"').replace(/\bTrue\b/g, '\"true\"'));
            }
            else if (header === 'category') {
                obj[header] = JSON.parse(values[index].replace(/'/g, '"'));
            }
            else {
                obj[header] = values[index];
            }
            return obj;
        }, {});
    });

    const cat_dat_raw = `id	name	parent	parent_bool	children	category	sel
0	category	-1	TRUE	[1, 2]	['garden creature accessories', 'coffee & teas']	[False, False]
1	garden creature accessories	0	FALSE	[3, 4, 5, 6, 7]	['earrings', 'pins', 'hair accessories', 'tote bags', 'charms']	[False, False, False, False, False]
2	coffee & teas	0	FALSE	[8, 9, 10, 11]	['herbal teas', 'floral fruit', 'coffee', 'mugs']	[False, False, False, False]
3	earrings	1	FALSE	[]	['earrings']	[False]
4	pins	1	FALSE	[]	['pins']	[False]
5	hair accessories	1	FALSE	[]	['hair accessories']	[False]
6	tote bags	1	FALSE	[]	['tote bags']	[False]
7	charms	1	FALSE	[]	['charms']	[False]
8	herbal teas	2	FALSE	[]	['herbal teas']	[False]
9	floral fruit	2	FALSE	[]	['floral fruit']	[False]
10	coffee	2	FALSE	[]	['coffee']	[False]
11	mugs	2	FALSE	[]	['mugs']	[False]
12	creature	-1	TRUE	[]	['butterfly', 'moth', 'bee', 'beetle', 'dragonfly']	[False, False, False, False, False]
13	flavor	-1	TRUE	[]	['jasmine', 'chamomile', 'lavender', 'rose', 'mint', 'vanilla', 'hazelnut', 'mocha', 'caramel', 'nutmeg']	[False, False, False, False, False, False, False, False, False, False]
14	caffeine	-1	TRUE	[]	['true', 'false']	[False, False]
15	price	-1	TRUE	[]	['0-10', '10-25', '25+']	[False, False, False]`;
    const cat_headers = cat_dat_raw.split('\n')[0].split('\t');
    const cat_data = cat_dat_raw.split('\n').slice(1).map(row =>
        row.split('\t').reduce((obj, value, index) => {
            if (cat_headers[index] === 'children') {
                obj[cat_headers[index]] = JSON.parse(value.replace(/'/g, '"'));
            } else if (cat_headers[index] === 'category') {
                obj[cat_headers[index]] = JSON.parse(value.replace(/'/g, '"'));
            } else if (cat_headers[index] === 'sel') {
                obj[cat_headers[index]] = JSON.parse(value.replace(/'/g, '"').replace(/\bFalse\b/g, 'false').replace(/\bTrue\b/g, 'true'));
            } else if (cat_headers[index] === 'parent_bool') {
                obj[cat_headers[index]] = value === 'TRUE' ? true : false;
            } else if (cat_headers[index] === 'id') {
                obj[cat_headers[index]] = parseInt(value);
            } else {
                obj[cat_headers[index]] = value;
            }
            return obj;
        }, {})
    );
    const true_cat_index = {
        'category': 0,
        'garden creature accessories': 1,
        'coffee & teas': 2,
        'earrings': 3,
        'pins': 4,
        'hair accessories': 5,
        'tote bags': 6,
        'charms': 7,
        'herbal teas': 8,
        'floral fruit': 9,
        'coffee': 10,
        'mugs': 11,
        'creature': 12,
        'flavor': 13,
        'caffeine': 14,
        'price': 15,
        'butterfly': 16,
        'moth': 17,
        'bee': 18,
        'beetle': 19,
        'dragonfly': 20,
        'jasmine': 21,


    }

    const get_gen_0_cat = (cat_data) => {
        return cat_data.filter(cat => cat.parent === '-1');
    }

    const [cat_popup_trigger, set_cat_popup_trigger] = useState(Array(cat_data.length).fill(false));
    const [cat_active_list, set_cat_active_list] = useState([]);

    const add_cat = (cat_name) => {
        const new_list = [...cat_active_list];
        new_list.push(cat_name);
        set_cat_active_list(new_list);
    }
    const del_cat = (cat_name) => {
        const new_list = [...cat_active_list].filter(cat => cat !== cat_name);
        // for (let i = 0; i < cat_data.length; i++) {
        //     if (cat_data[i].parent === -1) {
        //         let cnt = 0;
        //         for (let j = 0; j < new_list.length; j++) {
        //             if (cat_data[i].category.includes(new_list[j])) {
        //                 cnt++;
        //             }
        //         }
        //         if (cnt === 0) {
        //             new_list = new_list.filter(cat => cat !== cat_data[i].name);
        //         }
        //     }
        // }
        set_cat_active_list(new_list);
    }
    const check_highlight = (cat) => {
        for (let i = 0; i < cat.category.length; i++) {
            if (cat_active_list.includes(cat.category[i])) {
                return true;
            }
        }
        for (let i = 0; i < cat.children.length; i++) {
            for (let j = 0; j < cat_data[cat.children[i]].category.length; j++) {
                if (cat_active_list.includes(cat_data[cat.children[i]].category[j])) {
                    return true;
                }
            }
        }
        return false;
    }
    const in_view = (product) => {
        if (cat_active_list.length === 0) {
            return true; 
        }

        //price
        // if no price filter
        let status = true;
        if (cat_active_list.includes('0-10') || cat_active_list.includes('10-25') || cat_active_list.includes('25+')) {
            status = false;
            if (cat_active_list.includes('0-10') && product.price < 10) {
                status = true;
            }
            if (cat_active_list.includes('10-25') && product.price >= 10 && product.price < 25) {
                status = true;
            }
            if (cat_active_list.includes('25+') && product.price >= 25) {
                status = true;
            }
        }

        // return true if any of the categories in cat_active_list is in product.category or product.properties
        for (let i = 0; i < cat_active_list.length; i++) {
            if (product.category.includes(cat_active_list[i]) || (product.properties && Object.values(product.properties).includes(cat_active_list[i]))) {
                return status;
            }
        }

        return false;
    }

    const proper_case = (str) => {
        return str.split(' ').map(word => word.charAt(0).toUpperCase() + word.slice(1)).join(' ');
    }

    const [inventory, set_inventory] = useState(Array(data.length).fill(0));
    const [inventory_open, set_inventory_open] = useState(false);
    console.log(inventory);

    const [popup_message, set_popup_message] = useState('');
    const [popup_open, set_popup_open] = useState(false);
    

    const router = useRouter();
    return (
        <div className="w-full bg-[#C6E2D3] relative min-h-screen">
            <div className='fixed top-0 left-0 right-0 bottom-0 z-[40]'
                style={{
                    display: inventory_open ? 'block' : 'none',
                    backdropFilter: 'blur(5px)',
                }}
                onClick={() => {
                    set_inventory_open(false);
                }}
            ></div>
            <div className='fixed top-0 right-0 w-[420px] bottom-0 bg-[#FAF6F0] z-[50] shadow-lg items-center flex flex-col'
                style={{
                    display: inventory_open ? 'flex' : 'none',
                    backdropFilter: 'blur(5px)',
                }}
                onClick={(e) => {
                    e.stopPropagation();
                }}
            >
                <div className='w-full text-[#f4c6c6] text-[28px] font-extralight pt-[60px] text-center '>
                    Inventory
                </div>
                <div className='w-full h-[340px] overflow-x-hidden overflow-y-auto mt-[30px] mx-auto'>
                    {
                        inventory.map((item, index) => (
                            item === 0 ? null :
                            <div key={index} className='w-[380px] h-[90px] mx-auto flex justify-center items-center bg-[#000wfe00033] mt-[3px]'>
                                <div className='w-[80px] h-[80px] flex justify-center items-center'>
                                    <Image
                                        src={data[index].category.includes('garden creature accessories') ? `/butterfly.webp` : `/lavender.jpg`}
                                        alt={data[index].name}
                                        width={80}
                                        height={80}
                                        className='w-[60px] h-[60px] object-cover rounded-[2px] shadow-md'
                                    />
                                </div>
                                <div className='w-[270px] h-full flex justify-center items-start flex-col bg-[#000000few33] mx-[5px]'>
                                    <div className='w-full text-[#b59cc0] text-[16px] leading-[16px] font-light italic'>{proper_case(data[index].name)}</div>
                                    <div className='w-full text-[#D7C5DF] text-[12px] leading-[16px] font-[700]'>{`$${(data[index].price * 1).toFixed(2)}`} <b className='font-[900]'>{`($${(data[index].price * item).toFixed(2)})`}</b></div>
                                    <div className='w-full text-[#B4B4B4] text-[12px] leading-[16px] font-light italic'>x{item}</div>
                                    <div className='w-full flex gap-[4px] items-center'>
                                        <div className='text-[#7e7e7e] text-[11px] leading-[16px] font-medium italic underline select-none cursor-pointer active:font-black transition-all duration-150'
                                            onClick={() => {
                                                set_inventory(prev => {
                                                    const new_inventory = [...prev];
                                                    new_inventory[index] = Math.max(0, new_inventory[index] - 1);
                                                    return new_inventory;
                                                });
                                            }}
                                        >Remove</div>
                                        <div className='text-[#7e7e7e] text-[11px] leading-[16px] font-medium italic underline select-none cursor-pointer active:font-black transition-all duration-150'
                                            onClick={() => {
                                                set_inventory(prev => {
                                                    const new_inventory = [...prev];
                                                    new_inventory[index] = Math.min(99, new_inventory[index] + 1);
                                                    return new_inventory;
                                                });
                                            }}
                                        >Add</div>
                                    </div>
                                </div>
                            </div>
                        ))
                    }
                </div>
                <div className='absolute bottom-[120px] left-0 right-0 flex justify-center items-center'>
                    <div className='w-[90%] text-[16px] font-light italic text-center cursor-pointer transition-all duration-150 text-[#deb8ee]'>
                        What a beautiful selection you have here! 🌼 If you would like to continue with your purchase, please feel free to check out by clicking the button below :D
                    </div>
                </div>
                <div className='absolute bottom-[60px] left-0 right-0 flex justify-center items-center'>
                    <div className='w-[150px] text-[16px] font-light italic text-center cursor-pointer transition-all duration-150 bg-[#b59cc0] text-[#FAF6F0] rounded-[2px] py-[5px] hover:bg-[#d7c5df] active:scale-95'
                        onClick={() => {
                            const total_price = inventory.reduce((acc, item, index) => acc + (item * data[index].price), 0);
                            if (total_price === 0) {
                                set_popup_message("Oops! You can't checkout with an empty shopping cart 😅. Hopefully we can introduce you to something you like :D");
                                set_popup_open(true);
                                set_inventory_open(false);
                                return;
                            }
                            localStorage.setItem("fjweofjoiwefjiowjfio", JSON.stringify(total_price));
                            router.push('/checkout');
                        }}
                    >
                        Checkout
                    </div>
                </div>
            </div>
            <div className='fixed top-[10px] right-[10px] z-[32] w-[50px] h-[50px] bg-[#FAF6F0] rounded-sm shadow-lg flex justify-center items-center cursor-pointer text-[24px]
                active:scale-95 transition-all duration-150
            '
                onClick={() => {
                    if (inventory.filter(item => item > 0).length === 0) {
                        set_popup_message('Your inventory is empty! Please add items to your inventory before checking out. There is plenty to choose here 🌼!');
                        set_popup_open(true);
                        return;
                    }
                    set_inventory_open(prev => true);
                }}
            >
                <div className='opacity-[0.6]'>
                    🛒
                </div>
            </div>
            <div className='fixed top-[3px] right-[47px] z-[33] w-[28px] h-[28px] rounded-full bg-[#e48484] flex justify-center items-center text-[16px] font-light text-[#FAF6F0] shadow-lg'>
                {inventory.filter(item => item > 0).reduce((acc, item) => acc + item, 0)}
            </div>


            <div className='fixed top-[7px] left-0 right-0 z-[30]  flex justify-center items-center' 
                style={{
                    display: popup_open ? 'flex' : 'none',
                }}
                onClick={() => {
                    set_popup_open(false);
                    set_popup_message('');
                }}
            >
                <div className='w-[900px] bg-[#e48484] rounded-[2px]  flex justify-center flex-wrap items-center shadow-lg px-[20px] py-[10px] text-[#FAF6F0] text-[16px] font-light '>
                    {popup_message}{" "} <div className='underline '>Click to Close</div>
                </div>    
            </div> 

            <div className='w-full text-[64px] text-center font-light text-[#FAF6F0] italic pt-[50px] relative'>
                🦋 Wings & Teas 🫖
            </div>
            <div className='w-full text-[24px] text-center font-extralight text-[#FAF6F0] italic mt-[0px]'>
                Shop for your favorite garden creature accessories and soothing teas! Everything you need to relax and enjoy nature's beauty is here 🌼!!
            </div>
            <div className='w-[90%] mx-auto mt-[50px] bg-[#FAF6F0] rounded-[2px] shadow-lg flex justify-center items-center py-[10px] sticky top-[10px] z-[20]'>
                {
                    get_gen_0_cat(cat_data).map((cat, index) => (
                        <div key={index} className='w-[300px] flex justify-center items-center flex-col relative'>
                            <div className='w-[200px] text-[#F4C6C6] text-[20px] font-extralight  text-center cursor-pointer hover:font-bold transition-all duration-150 active:scale-95'
                                style={{
                                    fontWeight: check_highlight(cat) || cat_popup_trigger[cat.id] ? 'bold' : 'normal',
                                    textDecoration: check_highlight(cat) ? 'underline' : 'none',
                                }}
                                onClick={() => {
                                    set_cat_popup_trigger(prev => {
                                        const new_trigger = [...prev];
                                        new_trigger[cat.id] = !new_trigger[cat.id];
                                        return new_trigger;
                                    });
                                }}
                            >
                                {proper_case(cat.name) + (check_highlight(cat) ? ' *' : '')}
                            </div>
                            {
                                    cat_popup_trigger[cat.id] && <div className='w-[300px] py-[10px] flex flex-col justify-center items-center bg-[#FAF6F0] absolute top-[100%] left-0 translate-y-[13px] shadow-lg'>
                                {
                                    cat.category.map((sub_cat, sub_index) => (
                                        <div key={sub_index} className='w-[250px] text-[#D7C5DF] text-[16px] font-light cursor-pointer hover:font-bold  '
                                            style={{
                                                textAlign: cat.children.length > 0 ? 'left' : 'center',
                                                fontWeight: cat_active_list.includes(sub_cat) ? 'bold' : 'normal',
                                                textShadow: cat_active_list.includes(sub_cat) ? '0 0 15px #D7C5DF55' : 'none',
                                            }}
                                            onClick={() => {
                                                if (cat_active_list.includes(sub_cat)) {
                                                    del_cat(sub_cat);
                                                }
                                                else {
                                                    add_cat(sub_cat);
                                                }
                                                console.log(cat_active_list);
                                            }}
                                        >
                                            {proper_case(sub_cat) + (cat_active_list.includes(sub_cat) ? ' *' : '')}
                                            {
                                                cat.children.length > 0 &&
                                                cat_data[cat.children[sub_index]].category.map((sub_sub_cat, sub_sub_index) => (
                                                    <div key={sub_sub_index} className='w-[230px] text-[#D7C5DF] text-[14px] font-light cursor-pointer hover:font-bold  pl-[20px]'
                                                        style={{
                                                            fontWeight: cat_active_list.includes(sub_sub_cat) ? 'bold' : 'normal',
                                                        }}
                                                        onClick={(e) => {
                                                            e.stopPropagation(); // Prevent the click from bubbling up to the parent
                                                            if (cat_active_list.includes(sub_sub_cat)) {
                                                                del_cat(sub_sub_cat);
                                                            } else {
                                                                add_cat(sub_sub_cat);
                                                            }
                                                        }}
                                                    >
                                                        {sub_sub_cat + (cat_active_list.includes(sub_sub_cat) ? ' *' : '')}
                                                    </div>
                                                ))
                                            }
                                        </div>
                                    ))
                                }
                            </div>}
                        </div>
                    ))
                }
            </div>
            <div className='w-[90%] mx-auto mt-[50px] flex flex-wrap justify-center items-center gap-[10px] relative'>
                {
                    data.filter(item => in_view(item)).map((item, index) => (
                        <div key={index} className='w-[300px] h-[460px] bg-[#FAF6F0] rounded-[2px] shadow-sm flex flex-col justify-center items-center p-[20px] relative group'>
                            <div className='absolute top-[-3px] left-[-3px] w-[40px] h-[40px] bg-[#e48484] rounded-full flex justify-center items-center text-[24px] font-light text-[#FAF6F0] shadow-lg'
                                style={{
                                    display: inventory[index] > 0 ? 'flex' : 'none',
                                }}
                            >
                                <div>{inventory[index]}</div>
                            </div>
                            <div className='w-full text-[#b59cc0] text-[24px] font-light italic text-center'>{proper_case(item.name)}</div>
                            <div className='w-full text-[#D7C5DF] text-[16px] font-extrabold italic text-center mb-[10px]'>{`$${item.price}`}</div>
                            <div className='w-full flex justify-center items-center'>
                                <Image
                                    src={item.category.includes('garden creature accessories') ? `/butterfly.webp` : `/lavender.jpg`}
                                    alt={item.name}
                                    width={150}
                                    height={150}
                                    className='w-[150px] h-[150px] object-cover rounded-[2px] mb-[10px] shadow-md opacity-[0.7] group-hover:opacity-[0.9] transition-all duration-150 hover:scale-[1.05] hover:shadow-xl hover:shadow-[#00000066]'
                                />
                            </div>
                            <div className='w-full text-[#B4B4B4] text-[16px] font-light italic text-center mb-[10px]'>{item.desc}</div>
                            <div className='w-full text-[#d6d6d6] text-[14px] font-light italic text-center mb-[10px]'>{item.promo}</div>
                            <div className='w-full bg-[#D7C5DF] text-[#FAF6F0] text-[16px] font-light italic py-[10px] rounded-[2px] hover:bg-[#b59cc0] transition-all duration-150 active:scale-95 text-center cursor-pointer'
                                onClick={() => {

                                    //check inventory empty
                                    let empty = true;
                                    for (let i = 0; i < inventory.length; i++) {
                                        if (inventory[i] > 0) {
                                            empty = false;
                                            break;
                                        }
                                    }
                                    if (empty) {
                                        set_popup_message(`Added ${proper_case(item.name)} to your cart! Congrats on picking your first item, I like it! Now you can check your shopping cart by clicking the 🛒 icon in the top right corner :D`);
                                        set_popup_open(true);
                                    }

                                    set_inventory(prev => {
                                        const new_inventory = [...prev];
                                        new_inventory[index] = Math.min(99, new_inventory[index] + 1);
                                        return new_inventory;
                                    });
                                }}
                            >
                                Add to Cart
                            </div>
                        </div>
                    ))
                }
            </div>
        </div>
    );

}