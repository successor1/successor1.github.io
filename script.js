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
        title: "sample-post.txt",
        date: "January 15, 2024",
        content: "Welcome to My Blog - Sample Post\n\nThis is a sample text file that demonstrates how you can store blog content in text files. You can organize your blog posts by creating individual text files for each post.\n\nStructure your text files like this:\n- Use clear headings\n- Separate sections with blank lines\n- Include metadata at the top if needed\n- Keep content readable and well-formatted"
    },
    {
        title: "blog-ideas.txt",
        date: "January 12, 2024",
        content: "Blog Post Ideas\n\nHere are some ideas for future blog posts:\n\nTechnology:\n- The Evolution of Web Development\n- Understanding APIs and How They Work\n- Mobile-First Design Principles\n- Introduction to Version Control with Git\n\nLifestyle:\n- Morning Routines for Productivity\n- Digital Detox: Finding Balance\n- Sustainable Living on a Budget\n- The Art of Mindful Living"
    },
    {
        title: "contact.txt",
        date: "January 25, 2024",
        content: `<img src="images/image.png" alt="Contact Information" style="max-width: 100%; height: auto; border: 2px solid #000;">`,
        showReadMore: false  // no Read More here
    },
    {
        title: "faq.txt",
        date: "January 25, 2024",
        content: `My services

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

The purpose of Club69 Dot Space is to bring in people that want the best version of themselves by a continuous process of internal death of rebirth.

Tell me more?

You can join our telegram channel`,
        showReadMore: false  // no Read More here
    }
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
    }
];

// Load posts when page loads
document.addEventListener('DOMContentLoaded', function() {
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

The purpose of Club69 Dot Space is to bring in people that want the best version of themselves by a continuous process of internal death of rebirth.

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