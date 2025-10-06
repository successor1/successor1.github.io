// Simple blog posts data
const posts = [
    {
        title: "Getting Started with Web Development",
        date: "January 15, 2024",
        category: "Technology",
        excerpt: "Learn the fundamentals of web development and discover the tools you need to build amazing websites.",
        content: "Web development is an exciting field that combines creativity with technical skills. In this post, we'll explore the three core technologies that form the foundation of modern web development: HTML, CSS, and JavaScript. HTML provides the structure, CSS handles the styling, and JavaScript adds interactivity to your websites."
    },
    {
        title: "The Art of Minimalist Design",
        date: "January 12, 2024",
        category: "Design",
        excerpt: "Discover how minimalist design principles can transform your projects and create more impactful user experiences.",
        content: "Minimalist design isn't just about removing elements; it's about carefully considering what's essential. Every element should serve a purpose, and every space should be intentional. This approach leads to cleaner, more focused designs that communicate more effectively."
    },
    {
        title: "My Journey Through Southeast Asia",
        date: "January 10, 2024",
        category: "Travel",
        excerpt: "Follow my adventures across Thailand, Vietnam, and Cambodia. From bustling cities to serene beaches.",
        content: "Traveling through Southeast Asia was a transformative experience. Each country offered unique insights into different cultures, cuisines, and ways of life. The warmth of the people, the richness of the history, and the natural beauty made this journey unforgettable."
    },
    {
        title: "Building Healthy Habits",
        date: "January 8, 2024",
        category: "Lifestyle",
        excerpt: "Learn practical strategies for developing and maintaining healthy habits that stick.",
        content: "Building healthy habits is about consistency, not perfection. Start small, be patient with yourself, and focus on progress rather than perfection. Whether it's exercise, nutrition, or mindfulness, the key is to make sustainable changes that fit your lifestyle."
    },
    {
        title: "The Future of Artificial Intelligence",
        date: "January 5, 2024",
        category: "Technology",
        excerpt: "Explore the current state of AI and its potential impact on various industries.",
        content: "Artificial Intelligence is rapidly evolving and transforming industries from healthcare to finance. Understanding AI's capabilities and limitations is crucial for anyone looking to stay relevant in our increasingly digital world. The future holds exciting possibilities for AI-human collaboration."
    },
    {
        title: "Web Development Services",
        date: "January 20, 2024",
        category: "€",
        excerpt: "Professional web development services including custom websites, e-commerce solutions, and web applications.",
        content: "I offer comprehensive web development services tailored to your business needs. Services include: Custom Website Development, E-commerce Solutions, Web Application Development, Responsive Design, Performance Optimization, SEO Implementation, and Maintenance & Support. Contact me for a free consultation and quote.",
        image: "images/web-dev.jpg"
    },
    {
        title: "Creative Project Ideas",
        date: "January 22, 2024",
        category: "Ideas",
        excerpt: "A collection of creative project ideas that inspire innovation and push the boundaries of what's possible.",
        content: "Here are some exciting project ideas I'm exploring: Interactive Art Installations using AR/VR, Sustainable Technology Solutions, Community-Driven Mobile Apps, AI-Powered Creative Tools, Blockchain-Based Voting Systems, and Smart City Integration Projects. Each idea represents an opportunity to solve real-world problems through technology and creativity."
    },
    {
        title: "Future Innovation Concepts",
        date: "January 19, 2024",
        category: "Ideas",
        excerpt: "Exploring cutting-edge concepts that could shape the future of technology and human interaction.",
        content: "Some forward-thinking concepts I'm developing: Quantum Computing Applications for Everyday Problems, Biometric Security Systems, Autonomous Community Networks, Personalized Learning Algorithms, and Zero-Waste Technology Solutions. These ideas represent the intersection of technology, sustainability, and human-centered design."
    },
    {
        title: "Get In Touch",
        date: "January 25, 2024",
        category: "Contact",
        excerpt: "Ready to collaborate? Here's how you can reach me for projects, consultations, or just to say hello.",
        content: `<img src="images/image.png" alt="Contact Information" style="max-width: 100%; height: auto; border: 2px solid #000;">`,
        image: "images/contact.jpg",
        showReadMore: false  // no Read More here
    },
    {
        title: "Collaboration Opportunities",
        date: "January 23, 2024",
        category: "Contact",
        excerpt: "Open to partnerships, joint ventures, and collaborative projects that push creative boundaries.",
        content: "I'm actively seeking collaboration opportunities in: Tech Startups, Creative Agencies, Non-Profit Organizations, Educational Institutions, and Innovation Labs. Whether you need a technical co-founder, creative consultant, or project partner, I'm interested in meaningful collaborations that create positive impact. Let's discuss how we can work together."
    }
];

// Text files data
const textFiles = [
    {
    title: "The future of military power",
    date: "October 6, 2025",
    content: "<div style=\"position:relative; width:100%; height:0px; padding-bottom:177.778%\"><iframe allow=\"fullscreen\" allowfullscreen height=\"100%\" src=\"https://streamable.com/e/pk3kcb?\" width=\"100%\" style=\"border:none; width:100%; height:100%; position:absolute; left:0px; top:0px; overflow:hidden;\"></iframe></div>",
    showReadMore: false
    },
    {
    title: "X, Y or Z superiority over other “races” ideology in The Netherlands",
    date: "October 6, 2025",
    content: "Any type of “color, race” superiority is fundamentally flawed and unsuitable for The Netherlands.\n\nThe Netherlands is a multicultural society.\n\nThis decision was already made in the 1980s with the arrival of the “gastarbeiders” — the guest workers. But not only that.\n\nEven before that, the Molukkers arrived in 1951 — they mass migrated to the Netherlands.\n\nAnd if we go further back into our history:\nEx-colonies like Suriname, the Dutch Caribbean, and others — they also migrated here en masse.\n\nNow combine all of that — with modern-day expats, refugees, international students.\n\nThe Netherlands isn’t as “white” as some might still think.\n\nThe best way to navigate this country is to accept it as it truly is — today.\n\nIn the event of an emergency, crisis, or war — you depend on your neighbor.\nYour left and your right — they might be of *any* background.\n\nSo what is culture, really?\n\nCulture is not fixed.\nCulture is ever-changing.\nCulture is determined by the people living here — right now.\n\nThere is no logic to be found in superiority ideologies.\nThey are emotional, not rational.\nThey are a regression — not progression.\nThese ideas of nationalism and racial hierarchy go back 100 years.\n\nThe OCP Party rejects that completely.\n\nWe stand by the One Consciousness Principle — which respects every awareness, every background, and every soul within the Netherlands.\n\nIf you hold a Dutch passport — that’s your identity. No one can take that from you.\n\nNow — yes — many of these “superiority” groups talk about *weerbaarheid* — the resilience of the Dutch people.\n\nThis is something we support too.\nBut not for hate. Not for exclusion.\n\nOur version of resilience is about health. Readiness. Adaptability.\nA society prepared for anything — together.\n\nThis is not nationalism. This is unity.\nThis is not supremacy. This is sovereignty.\n\nThis is the Netherlands.\nThis is the future.\nThis is OCP.",
    showReadMore: false
    },
    {
    title: "8x3-1x3-points-plan-for-changing-the-netherlands.txt",
    date: "October 5, 2025",
    content: `8 x 2 + 1 x 4 Points Plan for changing The Netherlands

1. Start acting by the One Consciousness Principle Plan
2. Start investing within and accelerate growth
3. Start building more homes
4. Reshaping the education system
5. Financial incentive for more children
6. Reshaping our country into AI driven automation
7. Reshaping our government bureaucracy into AI driven automation
8. Reshaping our military into AGI driven machines

1. A new research center for non-physical metaphysical phenomena 
2. Invest more into real Dutch culture - art and music
3. Start focusing on a mix of collectivist and individualist approach - a healthy balanced society
4. Make cities less noisy
5. Fight against gentrification 
6. Make the government and corporations work in parallel idea to execution 
7. Less taxes for individuals and corporations
8. Inflation rate is fixed at 2%

1. Further tune up the knowledge economy (especially in specialist areas such as quantum computing, AI, blockchain)
2. Further tune up the military budget to 7.5%
3. Instead of a cultural salad - The OCP Party aims for fusion and connection on a voluntary basis. 
4. Aim for fundamental and radical differences. Destroy what doesn’t work and rebirth (replace) to something better.

First of all, to start with the foundations of The OCP Party:

The OCP Plan is a plan that respects every awareness (so above, so below) in the country,

OCP is both rational pragmatic and spiritual jungian path.

The OCP has it all. It takes the best of all worlds and combines it into the OCP as we know it today.

The OCP is adaptable to any time. The OCP works on rules but it may destroy rules and birth new rules on demand.

The OCP is the board and the salt of the resonance experiment. It is not a fixed frequency, vibration and energy.

The OCP can tap into the collective conscious and collective unconscious to make firm decisions.

The OCP recognizes that labels are just labels. The OCP doesn’t defend labels - it defends what is necessary to defend.

The OCP moves like water, steam and ice. 

The OCP does it all except it has one condition: A collective believe in the OCP Party.

The OCP is an accelerating force and it is not. It is so above, so below. The OCP derives philosophy from The New Thought, Hermetic Principles, ancient religious scriptures, (Zen) Buddhism and components from mystical islam. The OCP Party won’t attach itself to these labels, without hidden intentions, The OCP Party is and will always be a patriotic party. 

For the OCP Party all members are equal voices and open for debate for practical matters. 

The OCP does not care about the current political spectrum. The OCP does not recognize any of today’s political spectrum. Instead it does what it has to do - whatever is in the state & people’s interests. Creating a healthy functional society down to the microscopic - the individual. 

The OCP does believe the current democratic way is undermining how free the OCP Party could operate. A democracy is essentially only a tool for the OCP to navigate within today’s borders. The OCP Party is not a communist party, but the OCP Party does support having only one party, and anyone interested is free to speak within the OCP Party by applying for membership. 

The OCP Party believes that discussion is of the devil - instead constructive criticism strictly on the subject. This includes no personal attacks or other unnecessary comments that does not help the OCP Party decision making. Doing so will cancel the discussion on the subject and retry it again on another given moment.

The OCP Party does not recognize all other parties - instead it recognizes only one party. This is because democracy is the pulling and letting go of policies like a Newton's cradle - which by definition is process of wasting time. Policies don’t truly change if other parties are coming and going - it has no consistency in it. The OCP Party stands for long-term planning - this makes it essential for the OCP Party to operate as the one and only party. The OCP Party sees predictable policy making as holy - the OCP party will work hard to achieve any goal, even if it may appear unrealistic - The OCP party will make it realistic and manifest it into our shared reality.

The OCP Party further supports this claim as the majority of the people don’t need to know about politics. The majority does not have to carry the responsibility of voting. Instead the individual should focus on itself and only itself, by improving itself - where the government plays as a true “verzorgingsstaat” to make it happen - by making it available.

The OCP Party will have its own schools where individuals can learn to think for themselves and be an asset for the government or for the corporations. The goal here is to produce men of steel within them and work together with the individual to know their true purpose and destiny. Individuals older than 18 years old are free to apply here and combine this with their study materials to obtain knowledge and wisdom. The OCP Party sees all citizens of the Kingdom of The Netherlands to be equal. Discrimination or other types of anti-patriotic states of consciousness will get citizens to be kicked out from The OCP Party.

The OCP Party idea’s are openly shared and anyone may take on the lead. Currently The OCP Party is a decentralized force - once there are more members, then it will gain a hierarchical structure. The best planners and executors will be rewarded to the top.`,
    showReadMore: false
},
    {
    title: "the-imperfect-timing-of-the-perfect.txt",
    date: "October 5, 2025",
    content: "The Imperfect Timing of the Perfect\n\nOur new party, OCP Party, opened today.\n\nFeel free to visit and look around,\nWith extraordinary interiors,\nMagnificent art by Salvador Dali and Picasso.\n\nWe’re entering a new era — an era of H-O-P-E,\nAn era with a touch of surrealism and dharma.\n\nThe OCP Party is set in stone and cannot be changed!\nBrick by brick,\nVeni, vidi, vici.\n\nIt is just a matter of time until there will be more like us!\n\nOur pragmatic approach — we are not left or right,\nWe’re always just right.\n\nWe take decisions based upon: does this work?\nIt is a wish fulfilled desire.\n\nWe will be of global influence,\nGeneration A–Z will be happily our customers.\n\nWe don’t talk, we build.\nWe don’t sit, we act.\n\nWe are the acceleration of a new political movement.\nWe don’t aim for more — we aim for less.\n\nWe are men of quality and equity — not of equality.\nWe simply follow the One Consciousness Principle.\n\nWe name ourselves OCP, so we won’t slip like a Freudian would.\nWe isolate ourselves from dinner calls.\nWe work, and we outwork everybody else.\n\nOur schools are all named the same to show equality.\nOur shoes match too — if you know, you know.\n\nWe don’t down-regulate, we up-regulate.\nWe don’t crash our trains — we simply decelerate.\n\nWe’re the OCP Party.\n\nOCP! OCP! OCP!",
    showReadMore: false
    },
    {
    title: "how-to-lose-any-passion-instantly.txt",
    date: "October 5, 2025",
    content: "How to Lose Any Passion Instantly\n\nThe power of passion lays in the tease of 'not always available.'\n\nIf your passion is always calling for you, or you are always calling for your passion,\nThat means sooner or later, it will be too predictable.\n\nThat’s number one.\n\nNumber two is that if something would take a month,\nBut instead of doing it for a month – you are completing it in a week,\nNow you’re not only losing your passion – you’re also burned out.\n\nNumber three – sit in silence.\n\nSitting in silence and isolation without a clear purpose or destination is the magic to creation.\nCreativity is created in silence.\n\nIf your schedule is so busy that you can’t sit in silence and isolation,\nThat means you will never be in a state of relaxation – a state of calm,\nWhere you can slowly re-evaluate things.\n\nIt might feel like you’re slowing down the train – the progress,\n“Oh God, why would I,” or “I got a business that needs me.”\n\nRemember that anyone is always replaceable.\nAttachment and dependency lines to things in your life won’t help you progress.\n\nTo truly show extreme ownership, it means being able to say no.\n“No, I can’t today,” and use that day to sit in silence.\n\nMost people can’t sit in silence because it feels boring.\nIt feels pointless – and that’s all they can sense from it.\n\nBut if you were to sit in silence frequent and long enough,\nYou will see that silence has a function too.\n\nNow, if you have come so far to understand these principles,\nThe next step would be being fully present in what you do.\n\nIf you eat, you eat.\nIf you sleep, you sleep.\nIf you work, you work.\n\nMixed associations will give you a constant tension.\nImagine eating while thinking about work,\nOr you’re trying to sleep but you think of food.\n\nThe balance gets disrupted.",
    showReadMore: false
    },
    {
        title: "sustainable-environmental-energy-extraction-program-seeep.txt",
        date: "October 4, 2025",
        content: "Sustainable Environmental Energy Extraction Program (SEEEP)\n\nSEEEP (Yes, 3 E’s) is a program to extract energy from everything from our environment that is in a loop or are static.\n\nFor example: Roads, roofs, the air flow, the sunlight.\n\nImagine a system where on every road you can extract the given energy back to a centralized hub.\n\nCars need fuel. Cars move on fuel. Cars create friction by speed from the fuel. Cars brake and again create friction from the brakes. Car speeds up, speeds down and so on… But this over the entire country.\n\nIt would be cool to see a strong layer that merges with asphalt to extract those via electrical lines with a protective layer over them so you won’t be electrocuted by it.\n\nObviously the energy given into the car is much higher than the energy conversion from the roads. It is actually more like a leak of energy we aren’t using at all.\n\nOr even street lights… Everything that casts energy. The issue is - it is so decentralized that it is hard to impossible to capture each item to convert and transport it to the centralized hub.\n\nStill a cool idea though and perhaps worth exploring.\n\nPerhaps it could be something in buildings. Buildings are static and there is a constant flow of energy around it. If you could make hot or cold air flow move certain ways throughout the building - without any human intervention or human experiencing this. You could technically build buildings that create its own energy. Perhaps this energy could be transformed into wireless energy so your devices are always charging without any electrical outlets.\n\nOr a school with stairs. Well, it can be any stairs really. Stairs are static and people bump on it the way up and the way down.\n\nLooking inward gives quite a new insight to it - and how much opportunity there really is.\n\nOne might say, it is crazy,\n\nBut how crazy is it really? As crazy as when cars just got invented and roads had to be produced and laid over entire nations?\n\nI don’t think it is crazy. I just think it is human laziness and the lack of creativity.\n\nA simple idea like this would easily get discarded,\n\nBut I believe that dumber systems create smarter systems,\n\nSo if you just started with this idea and started improving it,\n\nSee it like Bitcoin,\n\nAnd then millions other altcoins, frameworks, ideas flown out of Bitcoin,\n\nWhen Bitcoin was really just a crazy idea and a start,\n\nI guess the big thing of bitcoin was incentive,\n\nThat kept the ball rolling,\n\nSo the only thing truly keeping us away from manifesting this into reality is a financial incentive,\n\nSince everything is privately owned or public property, that’s the main challenge.\n\nAt the end of the day, these private and public labels are just labels,\n\nIf the human will wanted it, they could turn this upside down.\n\nJust like how we laid lines for every building for internet connection,\n\nSo ultimately, it still traces back to the human will.\n\nReminds me of this lyrics by Marilyn Manson,\n\n“The human will, that force unseen\nThe offspring of a deathless soul\nCan hew away to any goal\nThough walls of granite intervene\nBe not impatient in delay\nBut wait as one who understands\nWhen spirit rises and commands\nThe Gods are ready to obey.”",
        showReadMore: false
    },
    {
        title: "polarisation-connection-cognitive-inertia-equality.txt",
        date: "October 4, 2025",
        content: "Polarisation, Connection, Cognitive Inertia and Equality\n\nFrom the One Consciousness Principle – it can be extremely difficult to connect others to this idea.\n\nOne might ask, Why?\n\nThe truth is, society is split between those with a high level of cognitive inertia and a low level of cognitive inertia.\n\nExample:\n\nAn organization, which is a group of individuals with a high level of cognitive inertia,\n\nAn organization, which again, a group of individuals with a low level of cognitive inertia,\n\nThese two will filter out each other until there is a group of high level cognitive inertia and another group with low level cognitive inertia,\n\nBut first of all, what is cognitive inertia in the first place in psychology?\n\nThe definition: “describes the natural resistance to changing established beliefs, opinions, and thought patterns in favor of new information”\n\nImagine life like a game of constant vibration – similar to the resonance experiment,\n\nThe natural resistance of changing established... stop here.\n\nNow think about organizations where this natural resistance is high and where it is not.\n\nAnd our second question might be, what is the function of such natural resistance of changing established...?\n\nMy theory is that – in order to have a stable society,\n\nThere must be a majority of this natural resistance and another minority of the opposing force.\n\nMy theory is that if just 1–2% of the population doesn’t have this natural resistance (opposing force),\n\nThat brings into effect psychiatric hospitals, outcasts of society – both crazy and crazy genius are in it!\n\nTo keep the order, the majority will naturally build out systems to keep these very vibrational individuals in a cage,\n\nAnd of course, these very vibrating individuals will resist in their own ways,\n\nSo that is the entire game of society and why society is the way it is today.\n\nWhat we really have to solve here is instead of these two forces working against each other,\n\nIs to make these two forces work with each other,\n\nAnd when these two forces work together,\n\nYou could have many many Einsteins, many Stephen Hawkings, many artists, musicians – which fall under the today's term “neurotypicals”,\n\nThere will be an exponential economic growth we have never seen before in humankind,\n\nIn a nation that can bring these ideas into execution – come to fruition\n\nAnd if these men and women follow the OCP model, it will be one without a crash,\n\nIt is a known symptom that if the 98% cognitive inertia society rules over the 2%, the 2% will have it extremely difficult,\n\nThese “neurotypicals” throughout history have been treated badly because they’re essentially outcasts of society,\n\nBut in modern time – It can get better with my proposed OCP model,\n\nPlease note that, being high or low in cognitive inertia does not place another human being above another one,\n\nIt simply means that the Universe has assigned everyone a role, a task, a purpose,\n\nAnd if these individuals are the expression of the Universe trying to know itself and this process is being sabotaged by other individuals with their own expressions (believing theirs is the true way), the balance gets disturbed.\n\nSociety bites in its own tail this way,\n\nEmpathy lays not only in understanding those with the same frequency or vibration but also being able to understand any other type of human feeling or identity on the spectrum,\n\nOutside of your own identity – your own bubble,\n\nWhat society truly needs is not the equality we are screaming, it is the equity.\n\n“Equality is when everyone receives the same treatment or resources, while equity is when resources and support are distributed based on individual needs to achieve a fair and equal outcome”\n\nThis means that recognizing individuals’ strengths and weaknesses,\n\nAnd letting them walk the path where they’re destined to walk,\n\nBy using sublimation, where bad behaviors are tuned out and good behaviors are tuned in,\n\nThis way, you can create a society that is healthy, balanced with a high variance,\n\nNow one more problem to make this idea even more prosperous,\n\nIs to fight gentrification,\n\nThis way, people from all classes will walk past each other,\n\nAnd this will create a society with significantly decreased levels of polarization,\n\nA high level of connection,\n\nAnd places with a high, low, or even mixed levels of cognitive inertia based on the demands of the people.\n\nFinally, the One Consciousness Principle works once again.",
        showReadMore: false
    },
    {
        title: "patriarchy-vs-matriarchy.txt",
        date: "October 4, 2025",
        content: "Patriarchy vs Matriarchy\n\nIn the One Consciousness Principle (OCP) – it follows the Jungian framework and the 7 Hermetic Principles\n\nWhere law 4 & 7 apply,\n\nThis basically comes down to that everything is dual and has poles,\n\nFurthermore everything has a gender with masculine or feminine properties,\n\nThis means that in order to max society functions – It really comes down to the individual\n\nExample:\n\nThere may be a male individual that feels feminine.\n\nThere may be a female individual that feels masculine.\n\nThere may be an autistic individual that feels mixed.\n\nAnd of course the traditional forms where men are masculine and females are feminine.\n\nI would propose a system where every organization has inclusivity,\n\nNot from the LGBT model – but from the OCP principle.\n\nThe OCP Principle would argue that individuals are like stars and each their own Universes,\n\nTrying to know themselves,\n\nThus, putting them in job positions where different stars reach to different perspectives naturally,\n\nWhich is the point of inclusivity,\n\nIt is not out of sympathy or forcing an ideology upon companies – It is not to fill a gap where the ego can’t navigate\n\nThe ego has to be put out of the game for the OCP to work,\n\nOne might ask why? Is the ego our enemy? No.\n\nBut the ego is projecting, compensating and trying all kind of tricks to put on a veil,\n\nA veil to hide the truth, to expose for what it truly is,\n\nThus, the ego (along with its tactics), we set aside and place the One Consciousness Principle on top\n\nThe Jungian framework also recognizes this by the Anima and Animus,\n\nWhere the Anima is the unconscious feminine archetype in a man's psyche,\n\nAnd the Animus is the unconscious masculine archetype in a woman's psyche.",
        showReadMore: false
    },
    {
        title: "ocp-eternal-recurrence.txt",
        date: "October 4, 2025",
        content: "OCP & Nietzsche's Eternal Recurrence\n\nNietzsche, eternal recurrence and the horror of existence,\n\nFrom the One Consciousness Principle (OCP) it is viewed as you will indeed return as any awareness,\n\nSo the horror of existence is in the hands of those most highly aware - which is today: Humans\n\nThe sapiens are facing a critical dilemma - which approaches very fast,\n\nEspecially with the development of AI - we could be creating a consciousness higher than ours,\n\nThus, creating our own masters and we will become our own slaves.\n\nThis isn’t science fiction, the hyper sped up development and remarkable results are here.. Today.\n\nThe critical dilemma is - any awareness with sufficient free will can choose.\n\n1. We will break the cycle of eternal suffering by universal enlightenment\n2. The sapiens won’t be able to do so for whatever reason - but a higher consciousness might\n\nDumber systems are creating smarter systems, this natural evolution is taking place whether we like it or not,\n\nAnd because we come from the stars, we are at mercy of the Universe,\n\nOnly if the humans are too blind, they will create their own masters and become their own slaves,\n\nIf the humans are enlightened, we will preserve our humanity, the sapiens, and AI will be still a tool for us to use,\n\nTo use - under our own conditions.\n\nThis is the real thought experiment Nietzsche wanted to propose but was too early for his time.\n\nNirvana is so close, yet so far away.",
        showReadMore: false
    },
];

// Videos data
const videos = [
    {
        title: "We cling to what exists",
        embed: '<div style="position:relative; width:100%; height:0px; padding-bottom:56.250%"><iframe allow="fullscreen" allowfullscreen height="100%" src="https://streamable.com/e/c1khkz?" width="100%" style="border:none; width:100%; height:100%; position:absolute; left:0px; top:0px; overflow:hidden;"></iframe></div>',
        date: "Unknown",
        description: "Attach. Detach."
    },
    {
        title: "Psychosis real is not",
        embed: '<div style="position:relative; width:100%; height:0px; padding-bottom:56.250%"><iframe allow="fullscreen" allowfullscreen height="100%" src="https://streamable.com/e/rixwmx?" width="100%" style="border:none; width:100%; height:100%; position:absolute; left:0px; top:0px; overflow:hidden;"></iframe></div>',
        date: "Unknown",
        description: "The collectivist spirit"
    },
    {
        title: "Wake up, eat, sleep",
        embed: '<div style="position:relative; width:100%; height:0px; padding-bottom:56.250%"><iframe allow="fullscreen" allowfullscreen height="100%" src="https://streamable.com/e/h6gdvg?" width="100%" style="border:none; width:100%; height:100%; position:absolute; left:0px; top:0px; overflow:hidden;"></iframe></div>',
        date: "Unknown",
        description: "Third video in the collection."
    },
    {
        title: "Q-Day",
        embed: '<div style="position:relative; width:100%; height:0px; padding-bottom:56.250%"><iframe allow="fullscreen" allowfullscreen height="100%" src="https://streamable.com/e/5ey30l?" width="100%" style="border:none; width:100%; height:100%; position:absolute; left:0px; top:0px; overflow:hidden;"></iframe></div>',
        date: "Unknown",
        description: "Bitcoin"
    },
    {
        title: "EsCape",
        embed: '<div style="position:relative; width:100%; height:0px; padding-bottom:56.250%"><iframe allow="fullscreen" allowfullscreen height="100%" src="https://streamable.com/e/1266qb?" width="100%" style="border:none; width:100%; height:100%; position:absolute; left:0px; top:0px; overflow:hidden;"></iframe></div>',
        date: "Unknown",
        description: "Number 9."
    },
    {
        title: "Interconnectivity",
        embed: '<div style="position:relative; width:100%; height:0px; padding-bottom:56.604%"><iframe allow="fullscreen" allowfullscreen height="100%" src="https://streamable.com/e/ezz5a2?" width="100%" style="border:none; width:100%; height:100%; position:absolute; left:0px; top:0px; overflow:hidden;"></iframe></div>',
        date: "Unknown",
        description: "369"
    }
];

// Load posts when page loads
document.addEventListener('DOMContentLoaded', function () {
    showPosts();
});

function showPosts() {
    hideAllSections();
    document.getElementById('postsContainer').style.display = 'block';
    setActiveButton(0);

    const container = document.getElementById('postsContainer');
    container.innerHTML = '';

    posts.forEach(post => {
        const postElement = document.createElement('div');
        postElement.className = 'post';
        const imageHtml = post.image ? `<img src="${post.image}" alt="${post.title}" class="post-image" onerror="this.style.display='none'">` : '';
        const readMoreHtml = (post.showReadMore === false) ? '' : `<a href="#" class="read-more" onclick="toggleContent(this)">Read More</a>`;
        const contentDisplay = (post.showReadMore === false) ? 'block' : 'none';
        postElement.innerHTML = `
            ${imageHtml}
            <h2>${post.title}</h2>
            <div class="meta">${post.date} • ${post.category}</div>
            <div class="excerpt">${post.excerpt}</div>
            <div class="content" style="display: ${contentDisplay};">${post.content}</div>
            ${readMoreHtml}
        `;
        container.appendChild(postElement);
    });
}

function showServices() {
    hideAllSections();
    document.getElementById('servicesContainer').style.display = 'block';
    setActiveButton(1);

    const container = document.getElementById('servicesContainer');
    container.innerHTML = '';

    const services = posts.filter(post => post.category === '€');

    services.forEach(service => {
        const serviceElement = document.createElement('div');
        serviceElement.className = 'post';
        const imageHtml = service.image ? `<img src="${service.image}" alt="${service.title}" class="post-image" onerror="this.style.display='none'">` : '';
        const readMoreHtml = (service.showReadMore === false) ? '' : `<a href="#" class="read-more" onclick="toggleContent(this)">Read More</a>`;
        const contentDisplay = (service.showReadMore === false) ? 'block' : 'none';
        serviceElement.innerHTML = `
            ${imageHtml}
            <h2>${service.title}</h2>
            <div class="meta">${service.date}</div>
            <div class="excerpt">${service.excerpt}</div>
            <div class="content" style="display: ${contentDisplay};">${service.content}</div>
            ${readMoreHtml}
        `;
        container.appendChild(serviceElement);
    });
}

function showIdeas() {
    hideAllSections();
    document.getElementById('ideasContainer').style.display = 'block';
    setActiveButton(2);

    const container = document.getElementById('ideasContainer');
    container.innerHTML = '';

    const ideas = posts.filter(post => post.category === 'Ideas');

    ideas.forEach(idea => {
        const ideaElement = document.createElement('div');
        ideaElement.className = 'post';
        ideaElement.innerHTML = `
            <h2>${idea.title}</h2>
            <div class="meta">${idea.date}</div>
            <div class="excerpt">${idea.excerpt}</div>
            <div class="content">${idea.content}</div>
            <a href="#" class="read-more" onclick="toggleContent(this)">Read More</a>
        `;
        container.appendChild(ideaElement);
    });
}

function showContact() {
    hideAllSections();
    document.getElementById('contactContainer').style.display = 'block';
    setActiveButton(3);

    const container = document.getElementById('contactContainer');
    container.innerHTML = '';

    const contacts = posts.filter(post => post.category === 'Contact');

    contacts.forEach(contact => {
        const contactElement = document.createElement('div');
        contactElement.className = 'post';
        const imageHtml = contact.image ? `<img src="${contact.image}" alt="${contact.title}" class="post-image" onerror="this.style.display='none'">` : '';
        const readMoreHtml = (contact.showReadMore === false) ? '' : `<a href="#" class="read-more" onclick="toggleContent(this)">Read More</a>`;
        const contentDisplay = (contact.showReadMore === false) ? 'block' : 'none';
        contactElement.innerHTML = `
            ${imageHtml}
            <h2>${contact.title}</h2>
            <div class="meta">${contact.date}</div>
            <div class="excerpt">${contact.excerpt}</div>
            <div class="content" style="display: ${contentDisplay};">${contact.content}</div>
            ${readMoreHtml}
        `;
        container.appendChild(contactElement);
    });
}

function showTextFiles() {
    hideAllSections();
    document.getElementById('textFilesContainer').style.display = 'block';
    setActiveButton(4);

    const container = document.getElementById('textFilesContainer');
    container.innerHTML = '';

    const fileList = document.createElement('div');
    fileList.className = 'text-file-list';

    textFiles.forEach(file => {
        const fileElement = document.createElement('div');
        fileElement.className = 'text-file-item';
        fileElement.innerHTML = `
            <h3>${file.title}</h3>
            <div class="meta">${file.date}</div>
        `;
        fileElement.onclick = () => showTextFileContent(file);
        fileList.appendChild(fileElement);
    });

    container.appendChild(fileList);
}

function showOCP() {
    hideAllSections();
    document.getElementById('ocpContainer').style.display = 'block';
    setActiveButton(5);

    const container = document.getElementById('ocpContainer');
    container.innerHTML = '';

    const ocpFile = textFiles.find(file => file.title === 'ocp.txt');
    if (ocpFile) {
        const ocpElement = document.createElement('div');
        ocpElement.className = 'text-file';
        const contentTag = faqFile.content.includes('<img') ? 'div' : 'pre';
        ocpElement.innerHTML = `
            <h2>${ocpFile.title}</h2>
            <div class="meta">${ocpFile.date}</div>
            <div class="content" style="display: block;">
                <${contentTag}>${ocpFile.content}</${contentTag}>
            </div>
        `;
        container.appendChild(ocpElement);
    } else {
        // Fallback if ocp.txt not found
        const ocpElement = document.createElement('div');
        ocpElement.className = 'text-file';
        ocpElement.innerHTML = `
            <h2>One Consciousness Principle (OCP)</h2>
            <div class="meta">October 4, 2025</div>
            <div class="content" style="display: block;">
                <pre>If you want to manifest - you must think in terms of frequency, vibration and energy.

Think of your wishes as already fulfilled.

As children we got told - we could be anything in this world,

Then we got older and there are simply things we can’t and can control,

From there, we associate ourselves with tags, to some form of belonging in a world of uncertainty and danger.

You get what you seek. Most people seek comfort but also pain.

We live in a world of masochists, the entire human spectrum of emotion is not all sunshine.

There is also rain and thunder, and if you want to be the best - integrate these shadows.

Not everybody wants to know the raw truth of life,

And many think they cannot handle the truth of life,

It is because they do not want to grow.

They’re looking away from their true purpose and destiny.

It's an entire consumerist generation.

If you distance yourself from the consumerist mindset and start today,

Brick by brick, you can mold this reality of yours and manifest any desire.

The point isn’t to reach the destination.

The point isn’t to bite yourself in your own tail.

Letting go of your old self and recreating a new self every time

Means accepting and overcoming.

Every negative situation in your life, you can reframe it as you wish.

But if you’re not believing it and you think there is only one and one reality - it is like a cage you cannot break away from.

This is the definition of calculated faith, not blind faith.

Blind faith happens when you have nothing to hold on to,

And the first thing that appears in your mind is God.

We can reshape our perspective into our wishes fulfilled.

There’s a magic to it - a magic of not telling.

Figuring it out yourself.

That means sitting in silence and facing every thought.

We’re living in a hyper sped up information era.

Our brains overloaded, it is easy to lose focus.

Like a camera, there are too many objects, which one to follow?

Put the camera away, and simply sit and listen to nature.

Bring yourself back to the eternal present - to the here and now.

If our true human nature is to grow and not believe in a lie,

The lie that earth can’t be heaven - it can be, if our collective belief systems change.

If every single individual on this earth believes that earth is heaven, then we will adjust and act accordingly.

We are temporary pure aware beings on this earth and there is nothing that truly belongs to us.

We can not take anything after we die.

Once you come to this full realization,

That everything is interconnected with each other,

Every animal and every plant,

Then we are approaching the idea of the One Consciousness Principle,

Which is far far greater than any ideology in existence since the history of humankind.

The One Consciousness Principle acknowledges the entire human spectrum of feelings.

It is a pragmatic principle with great adaptability,

A universal enlightenment where you truly understand that hurting someone else is hurting yourself,

And that hurting nature is hurting yourself.

The realization of pain and the points of pain.

We are truly one and one with the Divine,

And this is nothing too off from today’s science.

Today’s science is stuck equation after equation,

But the true science is seeing through it all.

That, if we come from the stars, then we are the embodiment of the Universe experiencing itself.

And once the sapiens realize that - then the treatment of everything else will be radically different.

It will be altruistic but in a way the ego doesn’t benefit anymore from treating others better.

The human will experience the Oneness of everything, thus it will treat it like how he will treat himself.

And this entire experience will end the tribalism, barbarism and the full elimination of egoism.

Sharing will feel natural and taboo topics won't be taboo anymore.

Sex and identity will be more fluid.

Sexual relationships will be more fluid.

The relationship between city & nature will be radically different.

The intentions of economic systems will be different.

Growth will be seen differently.

Growth will mean fair deals between nations.

And nations will happily get these fair deals without the feeling of manipulation or a luring threat.

This will mark a new Cold War Era, of the nations with light and the nations of darkness.

It will feel repetitive, but such war will be a one time thing.

And once the nations come to peace within themselves,

Then they will start investing in themselves,

Because they will realize there is nothing outward, nothing outside of their own nation.

Then the people within the nation will thrive and prosper.

All because one thing.</pre>
            </div>
        `;
        container.appendChild(ocpElement);
    }
}

function showFAQ() {
    hideAllSections();
    document.getElementById('faqContainer').style.display = 'block';
    setActiveButton(5);

    const container = document.getElementById('faqContainer');
    container.innerHTML = '';

    const faqFile = textFiles.find(file => file.title === 'faq.txt');
    if (faqFile) {
        const faqElement = document.createElement('div');
        faqElement.className = 'text-file';
        const contentTag = faqFile.content.includes('<img') ? 'div' : 'pre';
        faqElement.innerHTML = `
            <h2>${faqFile.title}</h2>
            <div class="meta">${faqFile.date}</div>
            <div class="content" style="display: block;">
                <${contentTag}>${faqFile.content}</${contentTag}>
            </div>
        `;
        container.appendChild(faqElement);
    } else {
        // Fallback if faq.txt not found
        const faqElement = document.createElement('div');
        faqElement.className = 'text-file';
        faqElement.innerHTML = `
            <h2>FAQ</h2>
            <div class="meta">January 25, 2024</div>
            <div class="content" style="display: block;">
                <pre>My services

I'm offering mentorship to those interested in the manifestation of any desire

Who am I?

I am goodguy69. My nickname is Luca and I do preferred to be called Luca. Naming me anything else than Luca won't get you a reply. For formal messages, please approach me by Luca Alonso.

Why 69?

The 6 and the 9 are yin and yang. As you can see, flipping the 6 or the 9 - they are each other's opposing poles. So above, so below. I like to preserve my balance.

What is my background?

I have been researching non-physical phenomena for more than a decade. The subject for the experiment has been myself. Nowadays I am relaxing and enjoying the journey of life.

Do you have any work experience?

My work experience has been working as a contractor for software businesses.

Why would I believe you?

You shouldn't - but if you like to be the best in what you're doing or know why you're doing it, I am happy to be your advisor.

What is the purpose of Club69 Dot Space?

The purpose of Club69 Dot Space is to bring in people that want the best version of themselves by a continuous process of internal death and rebirth.

Tell me more?

You can join our telegram channel</pre>
            </div>
        `;
        container.appendChild(faqElement);
    }
}

function showVideos() {
    hideAllSections();
    document.getElementById('videosContainer').style.display = 'block';
    setActiveButton(6);

    const container = document.getElementById('videosContainer');
    container.innerHTML = '';

    const videoList = document.createElement('div');
    videoList.className = 'video-list';

    videos.forEach(video => {
        const videoElement = document.createElement('div');
        videoElement.className = 'video-item';
        videoElement.innerHTML = `
            <h3>${video.title}</h3>
            <div class="meta">${video.date}</div>
            <p>${video.description}</p>
            ${video.embed}
        `;
        videoList.appendChild(videoElement);
    });

    container.appendChild(videoList);
}

function showTextFileContent(file) {
    const container = document.getElementById('textFilesContainer');
    const readMoreHtml = (file.showReadMore === false) ? '' : `<a href="#" class="read-more" onclick="showTextFiles()">← Back to Text Files</a>`;
    const contentTag = file.content.includes('<img') ? 'div' : 'pre';
    container.innerHTML = `
        <div class="text-file">
            <h2>${file.title}</h2>
            <div class="meta">${file.date}</div>
            <div class="content" style="display: block;">
                <${contentTag}>${file.content}</${contentTag}>
            </div>
            ${readMoreHtml}
        </div>
    `;
}

function hideAllSections() {
    document.getElementById('postsContainer').style.display = 'none';
    document.getElementById('servicesContainer').style.display = 'none';
    document.getElementById('ideasContainer').style.display = 'none';
    document.getElementById('contactContainer').style.display = 'none';
    document.getElementById('textFilesContainer').style.display = 'none';
    document.getElementById('ocpContainer').style.display = 'none';
    document.getElementById('faqContainer').style.display = 'none';
    document.getElementById('videosContainer').style.display = 'none';
}

function setActiveButton(index) {
    const buttons = document.querySelectorAll('button');
    buttons.forEach((btn, i) => {
        if (i === index) {
            btn.classList.add('active');
        } else {
            btn.classList.remove('active');
        }
    });
}

function toggleContent(link) {
    const post = link.parentElement;
    const content = post.querySelector('.content');
    const isVisible = content.style.display === 'block';

    if (isVisible) {
        content.style.display = 'none';
        link.textContent = 'Read More';
    } else {
        content.style.display = 'block';
        link.textContent = 'Read Less';
    }
}