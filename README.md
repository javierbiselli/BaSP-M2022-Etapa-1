# Week 02 - HTML

This html file is the landing page (desktop version) for TRACKGENIX SA

# Week 03 - CSS

This style.css file adds static style to the TRACKGENIX landing page 

# Week 04 - Responsive Design

These CSS files add style and responsiveness to the TRACKGENIX landing page using flexbox as the main design model and mobile first

- header.css is the top of the page. There are two different headers in Trackgenix landing page, one for mobile and tablet, and one for desktop resolutions. In the mobile version there are 2 elements, the tittle and the menu button. The tablet version adds the sidebar and the main logo, and the desktop version delete the logo image and logo, and replace them with the social network icons. These changes to the header are applied with media queries, making certain elements appear or disappear using display: none and display: inherit

- sidebar.css is the left bar of the page, it consists of a fixed box that changes width with different resolutions

- main.css contains the whole content of the page from the main section to the lists section, some elements here change from mobile and tablet to desktop, for example, the history section has buttons and less text in mobile and tablet than desktop, these changes are applied with media queries using display: none and display: inherit

- footer.css is the bottom of the page

- whole-page.css contains the styles that apply to the whole page, and the two media queries, one for tablet (768px), and one for desktop (1024px)

## **Click [here](https://javierbiselli.github.io/BaSP-M2022-Etapa-1/Semana-04/index.html) to go to the Trackgenix land page.**

# Week 05 - Javascript

This js files are the exercises corresponding to the fifth week of the BaSP 2022 course. The folder exercises contains every module of exercises, each using differents
Javascript tools to resolve the problematics. The js files are linked to the index.html file using the script tag. Results are visible on the browser's console

## **Click [here](https://javierbiselli.github.io/BaSP-M2022-Etapa-1/Semana-05/index.html) to go to the index.**

# Week 06 - DOM and Javascript

In this week I included the login and signup pages, both accesible through the sidebar menu (only in tablet and desktop versions).
The pages are responsive and every input in them contain validations to verify if the data provided by the user has a correct format. Also when you click or tap on the button on each page, a box appears below with the information provided by you on the inputs. If some input has an error, it will also show the error in this box.
Validations have been made with JavaScript logic and the elements are manipulated through JavaScript DOM. Responsiveness has been achived using flexbox as the main design model and mobile first

## **Click [here](https://javierbiselli.github.io/BaSP-M2022-Etapa-1/Semana-06/views) to go to the Trackgenix landing page with login and signup pages included.**

# Week 07 - JavaScript Async and Storage

In this week, I included more functions to the buttons in login and signup pages. When these buttons are clicked or tapped, the data written on the inputs is sent to a server (only if front validations are ok), then the server returns a message of success, or a message of error.
- In the login page, the message of success appears only when entering an existing user (in this case: rose@radiumrocket.com and BaSP2022), if you try any other user that does not exist, an error message sent by the server will appear.
- In the signup page, the message of success will appear only when you correctly fill the inputs needed, if an error that the frontend did not detect is found, the server will send a message with the specific data that needs to be corrected.
- The data in both pages is sent to the server only if the frontend validations are OK.
- The succesfull login data is saved to the local storage, when you try to log in again, the inputs will fill themselves automatically.
- Same for the signup, when you sign up correctly, if you try to sign up again, the inputs will load the data automatically
- The server will return a different id for every registered user, this id is also saved to the local storage.

## **Click [here](https://javierbiselli.github.io/BaSP-M2022-Etapa-1/Semana-07/views) to go to the Trackgenix landing page with updated login and signup.**

```
Author: Javier Biselli
```
