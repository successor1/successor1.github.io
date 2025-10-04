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
        title: "Digital Marketing Consulting",
        date: "January 18, 2024",
        category: "€",
        excerpt: "Strategic digital marketing consulting to help your business grow online and reach your target audience effectively.",
        content: "My digital marketing consulting services include: Social Media Strategy, Content Marketing Planning, SEO Audit & Optimization, Google Ads Management, Email Marketing Campaigns, Analytics & Reporting, and Brand Development. Let's discuss how I can help boost your online presence and drive results.",
        image: "images/marketing.jpg"
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