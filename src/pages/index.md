---
permalink: /index.html
title: ' Eleventy starter based on buildexcellentwebsit.es'
summary: 'Give the browser some solid rules and hints, then let it make the right decisions for the people that visit it, based on their device, connection quality and capabilities. This is how they will get a genuinely great user experience, rather than a fragmented, broken one.'
metaDesc: 'Key principles using modern CSS, fluid type, fluid space, flexible layout and progressive enhancement will help you to build better front-ends that work for everyone.'
layout: 'home'
principles:
  title: 'Key Foundations & Principles'
  quote: 'Stick to those principles and making excellent websites that work for everyone suddenly becomes much, much easier.'
  items:
    - title: 'Modern CSS with Methodologies'
      summary: |
        Instead of brute-forcing your designs together with a CSS framework, consider opting for a CSS methodology like [CUBE CSS](https://cube.fyi/), [SMACSS](http://smacss.com/) or [BEM](http://getbem.com/introduction/) that empowers you to write flexible, portable CSS, rather than rigid, inflexible and overly-specific CSS.
    - title: 'Fluid type & Space'
      summary: |
        Creating type scales that respond to the viewport, rather than setting explicit values for typography and space allows you to set rules once and forget about them, knowing that whatever device, regardless of its available size will be presented with appropriate sizes.
    - title: 'Flexible Layouts'
      summary: |
        Using flexible, flexbox-based layouts, like the ones we provide in [Every Layout](https://every-layout.dev/), ensures that regardless of conditions—be it content or available screen size: your front-end will be able to respond in the most appropriate way. Giving browsers hints and space to do what they do best, helps your front-end handle tricky scenarios where breakpoint-based layouts consistently fail.
    - title: 'Progressive Enhancement'
      summary: |
        Building up with the lowest possible technological solution and enhancing it where device capability, connection speeds and context conditions allow, helps you build for everyone, not just the minority of people that have fast connections and powerful devices that work well, all the time.

        Doing the opposite: building the best experience, then hacking it down for a handful of selected edge-cases means you’re almost  certainly going to build an experience that’s excludes a lot of people.
tools:
  title: 'Tools of the trade'
  summary: 'Tools are just tools. They don’t really matter—especially to the people trying to use the websites you build. The same goes for frameworks too. The most important thing is that you stick to the key principles. Even so, here are some useful tools I use together to build flexible front-ends.'
  items:
    - title: 'CUBE CSS'
      icon: 'cube.svg'
      summary: 'A CSS methodology that’s orientated towards simplicity, pragmatism and consistency.'
      link: 'https://cube.fyi/'
    - title: 'Utopia'
      icon: 'utopia.svg'
      summary: 'A handy collection of generators and tools that let you build up various fluid type and space scales depending on viewport sizes to help with responsive design.'
      link: 'https://utopia.fyi/'
    - title: 'Every Layout'
      icon: 'every-layout.svg'
      summary: 'A series of simple, composable layouts that can be ported to any project. There’s also heaps of learning material to help you *really* learn CSS layout.'
      link: 'https://every-layout.dev/'
    - title: 'Design Tokens'
      icon: 'design-tokens.svg'
      summary: 'Centralised data—almost like a database of design values—that could be consumed by anything that understands a standard, like JSON to help with design consistency.'
      link: 'https://piccalil.li/tutorial/what-are-design-tokens'
    - title: 'Polypane'
      icon: 'polypane.svg'
      summary: 'A handy app that lets you spin up multiple viewports in various configurations to help you build truly responsive sites.'
      link: 'https://polypane.app/'
    - title: 'Tailwind'
      icon: 'tailwind.svg'
      summary: 'A utility-first CSS framework that is very useful for generating utility classes on demand for CUBE CSS.'
      link: 'https://github.com/tailwindlabs/tailwindcss'
closer:
  title: 'Remember!'
  items:
    - title: 'Less pixel pushing & be more flexible'
      content: |
        Nulla vitae elit libero, a pharetra augue. Donec id elit non mi porta gravida at eget metus. Vestibulum id ligula porta felis euismod semper. Vestibulum id ligula porta felis euismod semper. Fusce dapibus, tellus ac cursus commodo, tortor mauris condimentum nibh, ut fermentum massa justo sit amet risus. Cras justo odio, dapibus ac facilisis in, egestas eget quam.
    - title: 'Give up controL & get more control'
      content: |
        Nulla vitae elit libero, a pharetra augue. Donec id elit non mi porta gravida at eget metus. Vestibulum id ligula porta felis euismod semper. Vestibulum id ligula porta felis euismod semper. Fusce dapibus, tellus ac cursus commodo, tortor mauris condimentum nibh, ut fermentum massa justo sit amet risus. Cras justo odio, dapibus ac facilisis in, egestas eget quam.
signoff:
  title: 'So with all that new knowledge:'
  summary: 'Go Forth And Build Excellent Websites.'
---

## Why though?

It was in 2010 when [Ethan Marcotte](https://twitter.com/beep) published the legendary [Responsive Web Design](https://alistapart.com/article/responsive-web-design/) article. It completely changed how we built websites for an ever-growing variety of device types and sizes.

The article has aged really well, but the practice of web design has not. Oftentimes, designers and developers get stuck into pixel-pushing a design into shape with rigid methods to ensure it looks exactly like that Figma, Sketch or even Photoshop design. This attitude has stuck around for a long time though, even as far back as the very early days of the web, which [Jeremy Keith](https://twitter.com/adactio) touched on in [Resilient Web Design](https://resilientwebdesign.com/):

> It was as though the web design community were participating in a shared consensual hallucination. Rather than acknowledge the flexible nature of the browser window, they chose to settle on one set width as the ideal …even if that meant changing the ideal every few years.
>
> Jeremy Keith - Resilient Web Design

We absolutely **don’t know** what our audience device sizes are going to be or whether or not they have a decent connection speed, fully working browser or even a bright enough screen to present our designs how **we want them to be presented**. We are all guilty of micromanaging the browser in some aspects, and in turn, are creating an inflexible and fragile user experience.

A better way to approach this is to **be the browser’s mentor** by setting some base rules and hints, then getting out of its way to let it make decisions based on the challenges it will **undoubtedly face**. Even looking at [this 2015 report on Android device sizes](https://www.opensignal.com/sites/opensignal-com/files/data/reports/global/data-2015-08/2015_08_fragmentation_report.pdf) tells us just how fragmented devices are. This was also conducted **7 years ago** and at the time of writing, it’s **2022**. That’s a long time for even more fragmentation to occur. Now factor in all of the other brands and types of device and you can really see how problematic it is, building websites in a rigid, specific manner.

It makes sense to lose a bit of **perceived control** and instead, get even **greater control** by being the browser’s mentor and not its micromanger, right?

Go ahead and open up this website on multiple devices or just resize the browser window. You’ll see it deals with anything that is thrown at it. It also uses progressive enhancement to leverage modern CSS, while providing a solid, base experience for browsers that don’t yet support those features, thanks to the usage of semantic HTML. All in, it’s around 2kb of CSS **in total**.
