// Simple blog posts data
const posts = [
    {
        title: "Building Healthy Habits",
        date: "January 8, 2024",
        category: "Ideas",
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
        title: "Contact Me",
        date: "October 4, 2025",
        category: "Contact",
        excerpt: "Reach out for collaborations, questions, or project inquiries.",
        content: "You can contact me via email at contact@example.com or through the form below. I'm open to freelance work, collaboration opportunities, or simply chatting about tech and ideas.",
        image: "images/image.png",
        showReadMore: false
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
        postElement.innerHTML = `
            ${imageHtml}
            <h2>${post.title}</h2>
            <div class="meta">${post.date} • ${post.category}</div>
            <div class="excerpt">${post.excerpt}</div>
            <div class="content">${post.content}</div>
            <a href="#" class="read-more" onclick="toggleContent(this)">Read More</a>
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
        serviceElement.innerHTML = `
            ${imageHtml}
            <h2>${service.title}</h2>
            <div class="meta">${service.date}</div>
            <div class="excerpt">${service.excerpt}</div>
            <div class="content">${service.content}</div>
            <a href="#" class="read-more" onclick="toggleContent(this)">Read More</a>
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
        const imageHtml = contact.image ? `<img src="${contact.image}" alt="${contact.title}" class="post-image" onerror="this.style.display='none'">` : '';
        const contactElement = document.createElement('div');
        contactElement.className = 'post';
        contactElement.innerHTML = `
            ${imageHtml}
            <h2>${contact.title}</h2>
            <div class="meta">${contact.date}</div>
            <div class="excerpt">${contact.excerpt}</div>
            <div class="content">${contact.content}</div>
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

function showVideos() {
    hideAllSections();
    document.getElementById('videosContainer').style.display = 'block';
    setActiveButton(5);
    
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
    container.innerHTML = `
        <div class="text-file">
            <h2>${file.title}</h2>
            <div class="meta">${file.date}</div>
            <div class="content" style="display: block;">
                <pre>${file.content}</pre>
            </div>
            <a href="#" class="read-more" onclick="showTextFiles()">← Back to Text Files</a>
        </div>
    `;
}

function hideAllSections() {
    document.getElementById('postsContainer').style.display = 'none';
    document.getElementById('servicesContainer').style.display = 'none';
    document.getElementById('ideasContainer').style.display = 'none';
    document.getElementById('contactContainer').style.display = 'none';
    document.getElementById('textFilesContainer').style.display = 'none';
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