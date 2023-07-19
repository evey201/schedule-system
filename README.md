# schedule-system
This a mini react schedule system, built with Typescript. Mock-data is used to simulate schedule data. 
- Game Presenters can be added, deleted, updated and it is listed on mui-datables on their own pages. The Dashboard not only displays the schedule but also gives an overview of Game presenters and Tables.
- Auth system has been implented as well as roles have been used to render pages to different users. Only the admin can add presenters and tables.
- Also a first layer of security has been added the login, if your user is not listed in the enviroment file, the login endpoint will not be triggered.
- React context was used as the state manager for this project
- A dockefile has also been provided
- A combination of tailwind and styled components was used in the project
- Vite was used to setup the project(with load time speed in view)
- Almost all components are built from scratch and only one or two libraries are used for any component in this project 
- A custom Loading component was added
- Rotation schedule was computed for presenters for a single day(3 shifts)
- Ability to Navigate between screens

# Clone and Build project
-   clone the project run Yarn install to build the react app
-   use yarn run dev to run the project

# Login 
Login with this usernames and passwords
-   email: admin@gmail.com, password: 12345
-   email: evey@gmail.com, password: 12345
-   email: julian@gmail.com, password: 12345


# Limitations
- Since there is no database or backend attached to the project, any newly added tables/game presenters will deleted once the page is refreshed. This can be improved upon by storing the data in local or session storage or using google firebase.

- Drawbacks in writing tests as i did not envision having some drawbacks(for example jest and vite issues) in trying to configure the test environment in the project.

