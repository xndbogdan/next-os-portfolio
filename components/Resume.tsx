import Image from 'next/image';

export const Resume = () => {
  return (
    <div className='bg-white text-black font-sans'>
      <div className='flex flex-wrap items-stretch py-2'>
        <div className='w-full px-4 flex items-stretch'>
          <div className='px-4 py-2 rounded w-full text-black'>
            <p className='text-xl font-bold'>Bio</p>
            <p className='pt-2'>
              As a Full Stack Developer with over 6 years of experience, I have a proven track record of delivering satisfying work for my clients.<br></br>
              The bulk of my expertise lies in Laravel, Vue, and their ecosystem, along with experience in React and Next.js.<br></br><br></br>
              I've worked on real-time auctioning software, a platform for musicians to build portfolios and track engagement helping them increase their hiring opportunities, and a metadata catalog for movie studios to maintain a single source of truth.<br></br>
              <br></br>
              I’m an effective communicator and a team player with a strong capacity to work independently.<br></br>
              I always try to see the projects I’m working on from the user's perspective, ensuring their interaction with the interface is smooth and user-friendly.<br></br>
              <br></br>
              In my free time, I work on personal projects that reflect my passion for technology and innovation. These include a Procreate Thumbnail Handler for Windows and a text color plugin for Statamic's WYSIWYG editor.<br></br>
              <br></br>
              Many of my projects are open-source, allowing me to give back to the developer community that has supported my growth. My personal website, built with Next.js, showcases my hands-on experience with the latest technologies:<br></br>
              <a className='text-orange-700 hover:text-orange-800' target='_blank' href='https://nextos.dev'>https://nextos.dev</a><br></br>
              <br></br>
              I’m ready to bring my skills, creativity, and passion to challenging projects that require technical proficiency and a love for tinkering.<br></br>
              I'm also a hobbyist composer with a love for sci-fi movies and video games, always dreaming of the 90s.
            </p>
            <h2 className='text-xl mt-5 font-bold mb-2'>Technical Skills</h2>
            <p>Node.js · PHP · Javascript · TypeScript · CSS · TailwindCSS · MySql · PostgreSQL · Laravel · Vue · SST · AWS Lambda · GraphQL · Amazon Web Services (AWS) · WebRTC · Sockets · ElasticSearch · Bootstrap · Vuetify · Python</p>
            
            <div className='mt-4'>
              <h2 className='text-xl font-bold mb-2'>Contact</h2>
              <p><span>Name: </span>Bogdan-Mihai Mosteanu</p>
              <p><span>Website: </span><a className='text-orange-700 hover:text-orange-800' target='_blank' href='https://nextos.dev'>https://nextos.dev</a></p>
              <p><span>Github: </span><a className='text-orange-700 hover:text-orange-800' target='_blank' href='https://github.com/xndbogdan'>https://github.com/xndbogdan</a></p>
              <p><span>LinkedIn: </span><a className='text-orange-700 hover:text-orange-800' target='_blank' href='https://www.linkedin.com/in/bogdan-mihai-mosteanu-476262120/'>https://www.linkedin.com/in/bogdan-mihai-mo%C8%99teanu-476262120/</a></p>
              <p><span>E-Mail: </span><a className='text-orange-700 hover:text-orange-800' target='_blank' href='mailto:bogdan.mosteanu@hey.com'>bogdan.mosteanu@hey.com</a></p>
              <p><span>Phone Number: </span><a className='text-orange-700 hover:text-orange-800' target='_blank' href='tel:+40723400149'>+40723400149</a></p>
            </div>
          </div>
        </div>
      </div>

      <div className='px-8 pt-1 pb-4'>
        <p className='text-xl font-bold'>Past work</p>

        <div className='mt-4'>
          <a className='text-orange-600 hover:text-orange-700 text-lg font-bold' href='https://fabricdata.com/' target='_blank'>→ Fabric</a>
          <p className='text-gray-700 px-5 -mt-1'><small>Contractor</small></p>
          <p className='text-gray-700 px-5 -mt-1'><small>Jul 2023 - Ongoing</small></p>
          <ul className='ml-4'>
            <li>● Fixed bugs in the app, making it more reliable for users.</li>
            <li>● Suggested changes to the way we write and organize code, helping the team work better.</li>
            <li>● Delivered critical fixes for key clients like MGM, Fox, Viacom, etc enhancing their experience and trust in the product.</li>
          </ul>
          <div className='px-4 mt-1'>
            <div className='text-base underline'>
              Tech Stack:
            </div>
            <p>Express.js, Laravel, React, Material UI</p>
          </div>
        </div>

        <div className='mt-4'>
          <a className='text-orange-600 hover:text-orange-700 text-lg font-bold' href='https://www.reelcrafter.com/' target='_blank'>→ ReelCrafter</a>
          <p className='text-gray-700 px-5 -mt-1'><small>Contractor</small></p>
          <p className='text-gray-700 px-5 -mt-1'><small>Nov 2022 - Aug 2023 · 10 mos</small></p>
          <ul className='ml-4'>
            <li>● Worked closely with the CEO to develop new features and fix bugs</li>
            <li>● Accelerated the progress on ReelCrafter’s planned v2.5 upgrade, which offers major usability & quality of life improvements for customers.</li>
            <li>● Came up with ideas that improved client experience and/or development experience</li>
          </ul>
          <div className='px-4 mt-1'>
            <div className='text-base underline'>
              Tech Stack:
            </div>
            <p><span className='font-bold'>V2:</span> SST 1 (Node) serverless backend with REST API, Vue 2 Frontend with Vuetify 2 component library</p>
            <p><span className='font-bold'>V2.5:</span> SST 2 (Node) serverless backend with GraphQL Api, Vue 3 Frontend with Vuetify 3 component library</p>
          </div>
        </div>

        <div className='mt-4'>
          <a className='text-orange-600 hover:text-orange-700 text-lg font-bold' href='https://www.webfusion.ro/' target='_blank'>→ WEBFUSION</a>
          <p className='text-gray-700 px-5 -mt-1'><small>Contractor</small></p>
          <p className='text-gray-700 px-5 -mt-1'><small>Sep 2020 - May 2022 · 1 yr 9 mos</small></p>
          <ul className='ml-4'>
            <li>● Spearheaded a critical initiative to address significant vulnerabilities and performance concerns in the existing codebase, resulting in a successful full code rewrite that significantly improved security and performance</li>
            <li>● Implemented Elasticsearch endpoints where database queries were not the best solution</li>
            <li>● Helped junior devs understand the tech stack and get better at their job</li>
            <li>● Implemented multiple API integrations, including payment processors</li>
          </ul>
          <div className='px-4 mt-1'>
            <div className='text-base underline'>
              Tech Stack:
            </div>
            <p>🡆 Pre-rewrite:</p>
            <p className='mx-2'>Client Apps: Vue 2 Frontend blessed with jQuery, served by a Laravel 5.6 app. Each client would have their own app with hardcoded configurations.</p>
            <p className='mx-2'>Multi-tenant Backend: PHP5.6</p>
            <p>🡆 Post-rewrite:</p>
            <p className='mx-2'>Client Apps: Nuxt Application, with feature flags for each client. Choosing a client is done from an .env variable, then specific client configurations would be loaded from the multi-tenant backend.</p>
            <p className='mx-2'>Multi-tenant Backend: Laravel 8, which integrates the features that the old individual client apps used to.</p>
          </div>
        </div>

        <div className='mt-4'>
          <a className='text-orange-600 hover:text-orange-700 text-lg font-bold' href='https://artgames.ro/en' target='_blank'>→ Art Games</a>
          <p className='text-gray-700 px-5 -mt-1'><small>Full Time Employee</small></p>
          <p className='text-gray-700 px-5 -mt-1'><small>Jul 2018 - Sep 2020 · 2 yr 2 mos</small></p>
          <ul className='ml-4'>
            <li>● Worked closely with the CTO in a 3 person team to rebuild the <a className='text-orange-700 hover:text-orange-800' target='_blank' href='https://www.artmark.ro/en'>Artmark</a> website</li>
            <li>● Learned how to manage a fast-paced, ever-changing outsourcing workflow</li>
            <li>● Helped junior devs understand the tech stack and get better at their job</li>
            <li>● Worked solo on projects from start to finish</li>
          </ul>
          <div className='px-4 mt-1'>
            <div className='text-base underline'>
              Tech Stack:
            </div>
            <p>Backend: I've used Laravel from 5.6 up to 8. I also worked with projects that used Express.js(Node).</p>
            <p>Frontend: I've used mostly vue 2, but also angular. As for CSS frameworks, I've used custom CSS, Bootstrap 4 & TailwindCSS</p>
          </div>
        </div>
        <p className='text-xl font-bold mt-4'>Projects</p>

        <p className='mt-2'>
          <a className='text-orange-700 hover:text-orange-800' target='_blank' href='https://bogdanmihai.gumroad.com/l/procreate-thumbnail-handler'>► Procreate Thumbnail Handler </a>
            - Windows DLL
        </p>
        <p className='ml-4'>Do you store your Procreate projects on your Windows computer and wish you could see their thumbnails?</p>
        <p className='ml-4'>This tool solves that issue!</p>

        <p className='text-xl font-bold mt-4'>Open Source Projects</p>
        
        <p className='mt-2'>
          <a className='text-orange-700 hover:text-orange-800' target='_blank' href='https://github.com/xndbogdan/statamic-bard-text-color'>► Bard Text Color</a>
            - Statamic Framework Plugin
        </p>
        <div className='ml-4'>
          <a target='_blank' href='https://packagist.org/packages/xndbogdan/statamic-bard-text-color' rel='nofollow'>
            <Image width='100' height='20' className='my-1' src='https://img.shields.io/packagist/dt/xndbogdan/statamic-bard-text-color.svg' alt='Total Downloads'/>
          </a>
        </div>
        <p className='ml-4'>This is a statamic bard plugin that lets you change text color!</p>
        <p className='ml-4'>It allows you to use the default tailwind palette, but you can also add your own.</p>
        <p className='ml-4'>It is under active development. New feature suggestions are welcomed.</p>

        <p className='mt-2'>
          <a className='text-orange-700 hover:text-orange-800' target='_blank' href='https://github.com/xndbogdan/laravel-ray-legacy'>► Laravel Ray Legacy</a>
            - Laravel Plugin
        </p>
        <div className='ml-4'>
          <a href='https://packagist.org/packages/xndbogdan/laravel-ray-legacy' rel='nofollow'>
            <Image width='100' height='20' className='my-1' src='https://img.shields.io/packagist/dt/xndbogdan/laravel-ray-legacy.svg' alt='Total Downloads'/>
          </a>
        </div>
        <p className='ml-4'>
          This package can be installed in any PHP application to send messages to the Ray app. It was modified to work with older laravel installations.
        </p>
        <p className='ml-4'>
          It is under active development. New feature suggestions are welcomed.
        </p>
      </div>
      
    </div>
  );
}
