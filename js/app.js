/**
 * 
 * Manipulating the DOM exercise.
 * Exercise programmatically builds navigation,
 * scrolls to anchors from navigation,
 * and highlights section in viewport upon scrolling.
 * 
 * Dependencies: None
 * 
 * JS Version: ES2015/ES6
 * 
 * JS Standard: ESlint
 * 
*/

/**
 * Define Global Variables
 * 
*/
const navi = document.getElementById("navbar__list");

const section_list = document.querySelectorAll("section")


/**
 * End Global Variables
 * Start Helper Functions
 * 
*/



/**
 * End Helper Functions
 * Begin Main Functions
 * 
*/

// build the nav


const navBuild = () =>{
    /* acording to mozilla NodeList is iterable by forEach method: https://developer.mozilla.org/en-US/docs/Web/API/NodeList 
     I am going to use this loop in case I would like to add or subtract any number of sections.
     */

    let navi_html = ''; //empty strig what will contain html code to add

    section_list.forEach(section => {
        const sectionID = section.id; //To name it correctly
        const sectionDataNav = section.dataset.nav; //To know were to scroll

        navi_html += `<li><a class="menu__link" href="#${sectionID}">${sectionDataNav}</a></li>`; //add one html element to navbar unordered list
    });

    //Now we append html once generated
    navi.innerHTML = navi_html;

};

navBuild();

// Add class 'active' to section when near top of viewport

/*
 When I first thought about this problem I knew the key was about knowing what the client is seeing thought his/her web window,
 but I didn't program any java before I started this nanodegree so I knew I had to take my time. After a little bit of training I decided
 to do some research throught documentation and I reached this: https://developer.mozilla.org/en-US/docs/Web/API/Element/getBoundingClientRect

But I couldn't quite understand by only reading doc so I do some youtube search and finally found this video:
https://www.youtube.com/watch?v=MKpZadkuT-0

So now I'm know more or less how to get this done. First I'm going to write a function called activeSection, this function will take in no argument
but it'll use the global variable section_list that contains all my sections (up to ten).

So I know that the viewer is seeing that section using window.innerHeight, this maybe won't be permanent so I should be constantly getting it althought I know this 
will increment cost, maybe for a mobile phone would be constant but some mobile phone let display more than one app at the time so I think I will leave it as an 
uncertain value all the time. Then I'll need to know the relative position from all sections all the time, because that way I'll be able to know if it's on screen 
or not. 

 */
const onScreen = (rel_pos, screen) => {
    if (rel_pos <= screen && rel_pos >= 0) {
        return true
    } else {
        return false
    }

}

const activateSection = () => {
    section_list.forEach(section => {
        const rel_pos = section.getBoundingClientRect().top;//I select top because It's the only one I care to know relative position since I know if top is in the screen all the article should be
        const screen = window.innerHeight;

        //Down here I'm going to add another function to see if is in the screen or not
        if (onScreen(rel_pos, screen)) {
            section.classList.add('your-active-class');
        } else {
            section.classList.remove('your-active-class');
        }
    });

};

// Now I add an eventListener on 'scroll' so whenever the client scrolls the active/s section is recalculated:

window.addEventListener('scroll', activateSection);

// Scroll to anchor ID using scrollTO event


/**
 * End Main Functions
 * Begin Events
 * 
*/

// Build menu 

// Scroll to section on link click

// Set sections as active




