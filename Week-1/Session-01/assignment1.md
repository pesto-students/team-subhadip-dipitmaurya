# Exercise 1.1 

#### Q1:  What is a protocol stack, and how is it used in web development?

A protocol stack is a set of network protocol layers that work together starting from the application layer at the top (the source of the data being sent) to the data link layer at the bottom (transmitting the bits on the wire).
Sharing data over any network means that both ends must agree on how the data is to be sent. Regardless of the type of communication, they can only communicate with equipment that follows the same protocol at each end of the network. Multi layered networks split the components down into layers so that the data is not affected by the mode of transmission, the mode of transmission is not affected by the hardware, the hardware is not affected by the synchronicity of the equipment.

[![N|Solid](https://www.w3.org/People/Frystyk/thesis/tcp.gif)]

#### Q2:  What are the different types of web servers, and how do they differ in terms of functionality and performance?
There are four leading web servers − Apache, IIS, lighttpd and Jagsaw.

###### Apache HTTP Server: 
This is the most popular web server in the world developed by the Apache Software Foundation. Apache web server is an open source software and can be installed on almost all operating systems including Linux, Unix, Windows, FreeBSD, Mac OS X and more. About 60% of the web server machines run the Apache Web Server.

###### Internet Information Services: 
The Internet Information Server (IIS) is a high performance Web Server from Microsoft. This web server runs on Windows NT/2000 and 2003 platforms. IIS comes bundled with Windows NT/2000 and 2003; Because IIS is tightly integrated with the operating system so it is relatively easy to administer it.

###### Nginx Web Server
Nginx is another types of web servers that is also open source software. The first release of Nginx was in October 2004, which was created by Igor Sysoev. Initially Nginx software acts as a web server; now it’s used also as a load balancer, reverse proxy, media streaming, and HTTP cache.

###### LiteSpeed Web Server
LiteSpeed (LSWS) is another popular types of web server which is developed by LiteSpeed Technologies and it is a commercial web server. The LSWS web server has the capability to replace all the functionality of Apache web server.

If we want to improve the performance of our web server, then we can upgrade our web server to LiteSpeed without changing any programs or operating system and lower operating costs. In recent times, it’s also getting popular and about 10% of hosting companies are using the LiteSpeed web server for hosting their websites.

###### jigsaw Server

Jigsaw (W3C's Server) comes from the World Wide Web Consortium. It is open source and free and can run on various platforms like Linux, Unix, Windows, Mac OS X Free BSD etc. Jigsaw has been written in Java and can run CGI scripts and PHP programs.

#### Q3. What is web hosting, and what are the different types of hosting services available for websites?
Web Hosting is a service that allows hosting/post-web-server applications( website or web page ) on a computer system through which web-browser clients can have easy access to electronic content on the Internet.

##### Shared Hosting
One's website is placed on the same server as many other sites, ranging from a few sites to hundreds of websites. Typically, all domains may share a common pool of server resources, such as RAM and the CPU. The features available with this type of service can be quite basic and not flexible in terms of software and updates
##### Cloud Hosting
A cloud hosted website may be more reliable than alternatives since other computers in the cloud can compensate when a single piece of hardware goes down. Also, local power disruptions or even natural disasters are less problematic for cloud hosted sites, as cloud hosting is decentralized.
##### Managed Hosting
The user gets their own web server but is not allowed full control over it (user is denied root access for Linux/administrator access for Windows); however, they are allowed to manage their data via FTP or other remote management tools. The user is disallowed full control so that the provider can guarantee quality of service by not allowing the user to modify the server or potentially create configuration problems. The user typically does not own the server. The server is leased to the client.
##### VPS Hosting
A Virtual Private Server (VPS) is one of the most flexible web hosting options. You’ll get a private partition on a physical server with dedicated resources. You can configure, control, and customize your virtual server according to your preference. Hence, it is an outstanding choice for professionals looking for power and flexibility for their projects.
##### Dedicated Hosting
Dedicated hosting is an Internet hosting option in which a physical server (or servers) is dedicated to a single business customer. The customer has complete control over the machine, so they can optimize it for their unique requirements, including performance and security. The hosting provider supplies the physical server and environment, the associated services and technical support.

#### Q4. What is scaling, and why is it important for web applications? How does scaling differ for vertical and horizontal scaling?
The scalability of an application can be measured by the number of requests it can effectively support simultaneously. The point at which an application can no longer handle additional requests effectively is the limit of its scalability. This limit is reached when a critical hardware resource runs out, requiring different or more machines. Scaling these resources can include any combination of adjustments to CPU and physical memory (different or more machines), hard disk (bigger hard drives, less “live” data, solid state drives), and/or the network bandwidth (multiple network interface controllers, bigger NICs, fiber, etc.).

Horizontal scaling means scaling by adding more machines to your pool of resources (also described as “scaling out”), whereas vertical scaling refers to scaling by adding more power (e.g. CPU, RAM) to an existing machine (also described as “scaling up”).

#### Q5. What is SEO (Search Engine Optimization), and how can web developers optimize their websites for better search engine rankings?
Search engine optimization (SEO) is the art and science of getting pages to rank higher in search engines such as Google. Because search is one of the main ways in which people discover content online, ranking higher in search engines can lead to an increase in traffic to a website.

###### Keyword research: 
Keyword research is often the starting point for SEO and involves looking at what keywords a site is already ranking for, what keywords competitors rank for, and what other keywords potential customers are searching for. Identifying the terms that searchers use in Google search and other search engines provide direction on what existing content can be optimized and what new content can be created.



###### Content marketing: 
Once potential keywords are identified, content marketing comes into play. This can be updating existing content or creating brand new pieces of content. Because Google and other search engines place a premium on high-quality content, it's important to research what content is already out there and create a compelling piece of content that provides a positive user experience and has a chance of ranking higher in the search engine results. Good content also has a greater chance of being shared on social media and attracting links.

###### Link building:
Because links from external websites are one of the core ranking factors in Google and other major search engines, obtaining high-quality backlinks is one of the main levers that SEO has. 

###### On-page optimization:
 Common on-page optimization techniques include optimizing the URL of the page to incorporate keywords, updating the title tag of the page to use relevant search terms, and using the alt attribute to describe images. Updating a page's meta tags (such as the meta description tag) can also be beneficial-- these tags don't have a direct impact on search rankings, but can increase click-through rate from the SERPs.

###### Site architecture optimization:
External links are not the only thing that matters for SEO, internal links play a large role in SEO as well. Thus a search engine optimizer can improve a site's SEO by making sure key pages are being linked to and that relevant anchor text is being used in those links to help improve a page's relevance for specific terms. Creating an XML sitemap can also be a good way for larger pages to help search engines discover and crawl all of the site's pages.

###### Semantic markup:
Another SEO strategy is optimizing a website's semantic markup. Semantic markup is used to describe the meaning behind the content on a page, such as helping to identify who the author of a piece of content is or the topic and type of content on a page. Using semantic markup can help with getting rich snippets displayed in the search results page, such as extra text, review stars and even images.
