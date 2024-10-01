"use strict";(self.webpackChunkmy_website=self.webpackChunkmy_website||[]).push([[842],{4467:(e,n,t)=>{t.r(n),t.d(n,{assets:()=>l,contentTitle:()=>a,default:()=>h,frontMatter:()=>o,metadata:()=>r,toc:()=>c});var s=t(4848),i=t(8453);const o={title:"GSoC 2024 - PEcAn Project Ideas"},a="GSoC - PEcAn Project Ideas",r={type:"mdx",permalink:"/gsoc_ideas",source:"@site/src/pages/gsoc_ideas.mdx",title:"GSoC 2024 - PEcAn Project Ideas",description:"background)",frontMatter:{title:"GSoC 2024 - PEcAn Project Ideas"},unlisted:!1},l={},c=[{value:"Project Ideas",id:"project-ideas",level:2},{value:"Machine Learning downscaling of PEcAn outputs",id:"machine-learning-downscaling-of-pecan-outputs",level:4},{value:"Adopting data schema for field management events",id:"adopting-data-schema-for-field-management-events",level:4},{value:"PEcAn Code Hardening by Integration Testing",id:"pecan-code-hardening-by-integration-testing",level:4},{value:"Optimize PEcAn for freestanding use of single packages [R package development]",id:"optimize-pecan-for-freestanding-use-of-single-packages-r-package-development",level:4},{value:"PEcAn model coupling and development [Data Science]",id:"pecan-model-coupling-and-development-data-science",level:4},{value:"Development of Notebook-based PEcAn Workflows",id:"development-of-notebook-based-pecan-workflows",level:4},{value:"PEcAn in the cloud",id:"pecan-in-the-cloud",level:4}];function d(e){const n={a:"a",h1:"h1",h2:"h2",h4:"h4",header:"header",hr:"hr",li:"li",ol:"ol",p:"p",strong:"strong",ul:"ul",...(0,i.R)(),...e.components};return(0,s.jsxs)(s.Fragment,{children:[(0,s.jsx)(n.header,{children:(0,s.jsx)(n.h1,{id:"gsoc---pecan-project-ideas",children:(0,s.jsx)(n.a,{href:"#background",children:"GSoC - PEcAn Project Ideas"})})}),"\n",(0,s.jsx)(n.p,{children:"Ecosystem science has many components, so does PEcAn! Some of those components where you can contribute. Below is a list of potential ideas. Feel free to contact any of the mentors in slack, or feel free to ask questions in our #gsoc-2024 channel in slack."}),"\n",(0,s.jsx)(n.hr,{}),"\n",(0,s.jsx)(n.h2,{id:"project-ideas",children:(0,s.jsx)(n.a,{href:"#ideas",children:"Project Ideas"})}),"\n",(0,s.jsx)(n.p,{children:"Following is a list of project ideas, use this list to contact the appropriate mentors on slack. Feel free to propose your own ideas as well, in this case contact @kooper in slack so he can put you in contact with the best mentors."}),"\n",(0,s.jsx)(n.hr,{}),"\n",(0,s.jsx)(n.h4,{id:"machine-learning-downscaling-of-pecan-outputs",children:(0,s.jsx)(n.a,{href:"#ml",children:"Machine Learning downscaling of PEcAn outputs"})}),"\n",(0,s.jsx)(n.p,{children:"This project would extend an existing prototype that takes ensemble-based outputs from the process-based PEcAn models (and the data assimilation code in particular) and use ML models to make predictions to new locations where the PEcAn models were not run (a.k.a. downscaling). Existing code downscales the low-frequency (monthly to annual) carbon pool outputs using a random forest model and a harmonized stack of gridded spatial data (climate, land use/land cover, soils, topography). The current system also preserves the covariance structure across variables, space, and time by downscaling each model ensemble member separately and then using the downscaled ensemble to calculate summary statistics. Also included are some basic assessments of (cross-)validation skill and variable importance."}),"\n",(0,s.jsx)(n.p,{children:(0,s.jsx)(n.strong,{children:"Expected outcome:"})}),"\n",(0,s.jsx)(n.p,{children:"A successful project would complete at subset of the following tasks:"}),"\n",(0,s.jsxs)(n.ol,{children:["\n",(0,s.jsx)(n.li,{children:"Extend the code to downscale higher-frequency (hourly to daily) carbon flux outputs"}),"\n",(0,s.jsx)(n.li,{children:"Develop tools for aggregating downscaled outputs to user-specified spatial units (e.g., political boundaries, atmospheric model grid cells)"}),"\n",(0,s.jsx)(n.li,{children:"Explore alternative ML models and multi-model ensembles."}),"\n",(0,s.jsx)(n.li,{children:"Extend the set of covariate data to make use of time-varying inputs (e.g. that year\u2019s weather rather than the climatological mean), additional remotely sensed observations, and the previous ecosystem state."}),"\n",(0,s.jsx)(n.li,{children:"Improving the downscaling validation checks, potentially adding additional corrections to the computed uncertainties (current prototype tool tends to underpredict the ensemble spread)."}),"\n"]}),"\n",(0,s.jsx)(n.p,{children:(0,s.jsx)(n.strong,{children:"Prerequisites:"})}),"\n",(0,s.jsxs)(n.ul,{children:["\n",(0,s.jsx)(n.li,{children:"Required: R (existing prototype is in R); basic familiarity with ML techniques and packages"}),"\n",(0,s.jsx)(n.li,{children:"Helpful: familiarity with large spatial gridded data (e.g., GIS, R terra, remote sensing); more advanced statistics, ML, or data science; Python"}),"\n"]}),"\n",(0,s.jsxs)(n.p,{children:[(0,s.jsx)(n.strong,{children:"Contact person:"}),"\nMike @Dietze"]}),"\n",(0,s.jsxs)(n.p,{children:[(0,s.jsx)(n.strong,{children:"Duration:"}),"\nSize: 175 hours for 1-2 tasks, 350 hours for 3 or more tasks"]}),"\n",(0,s.jsxs)(n.p,{children:[(0,s.jsx)(n.strong,{children:"Difficulty:"}),"\nMedium"]}),"\n",(0,s.jsx)(n.hr,{}),"\n",(0,s.jsx)(n.h4,{id:"adopting-data-schema-for-field-management-events",children:(0,s.jsx)(n.a,{href:"#management",children:"Adopting data schema for field management events"})}),"\n",(0,s.jsx)(n.p,{children:"This project aims to adapt a data schema for an R shiny application called fieldactivity. Fieldactivity is an application that allows field operators and researchers to enter field information about management activities through UI to aid bookkeeping of such events. The management activities and associated information are then stored in json files from which the information can be used for modelling."}),"\n",(0,s.jsxs)(n.p,{children:["The fieldactivity application uses UI elements that are created with RShiny and therefore follows the R coding conventions. At the moment, to meet these R coding criteria, the data structure is read from a json file called ui_structure_json, which contains the necessary attributes to create the UI with R. As this json file is independent and does not communicate with any other data sources, it must be manually updated if the data requirements are to be kept up to date with other data sources. To overcome the potential differences between the data sources, we have created a json data schema (",(0,s.jsx)(n.a,{href:"https://github.com/hamk-uas/fieldobservatory-data-schemas/blob/main/management-event.schema.json",children:"management-event.schema.json"}),") to act as a single source of truth for different data sources. The GSoC task is to incorporate this schema into the fieldactivity shiny app such that it can read the variable information from the schema and store the data in the correct structure. In addition, the app should be made flexible such that when a change is made to the json schema, it can deploy and change / create UI elements accordingly on the fly. To achieve this, the functionalities around how the applications store the data need to be reconstructed."]}),"\n",(0,s.jsx)(n.p,{children:(0,s.jsx)(n.strong,{children:"Expected outcome:"})}),"\n",(0,s.jsx)(n.p,{children:"The project can be divided to following subtasks:"}),"\n",(0,s.jsxs)(n.ol,{children:["\n",(0,s.jsx)(n.li,{children:"The fieldactivity application will be able to handle/read the data, which have been stored in the current way or structured according to the management data schema."}),"\n",(0,s.jsx)(n.li,{children:"The data storage convention will be changed for those management cases, where it is possible to store multiple incidents at once. Currently these cases are stored in a list in a format that the data schema doesn\u2019t support."}),"\n",(0,s.jsxs)(n.li,{children:["Include the data schema as part of the fieldactivity code:","\n",(0,s.jsxs)(n.ul,{children:["\n",(0,s.jsx)(n.li,{children:"Variable names and metadata are read from the data schema. This also requires translation of the data schema information so that UI elements can be created in R Shiny."}),"\n",(0,s.jsx)(n.li,{children:"Stored data follows the structure and the names of the data schema."}),"\n"]}),"\n"]}),"\n"]}),"\n",(0,s.jsx)(n.p,{children:(0,s.jsx)(n.strong,{children:"Prerequisites:"})}),"\n",(0,s.jsxs)(n.ul,{children:["\n",(0,s.jsx)(n.li,{children:"Required: R and RShiny, json"}),"\n"]}),"\n",(0,s.jsxs)(n.p,{children:[(0,s.jsx)(n.strong,{children:"Contact person:"}),"\nHenri Kajasilta"]}),"\n",(0,s.jsxs)(n.p,{children:[(0,s.jsx)(n.strong,{children:"Duration:"}),"\nFlexible to work as either a Small (175hr) or Large (350 hr)"]}),"\n",(0,s.jsxs)(n.p,{children:[(0,s.jsx)(n.strong,{children:"Difficulty:"}),"\nMedium"]}),"\n",(0,s.jsx)(n.hr,{}),"\n",(0,s.jsx)(n.h4,{id:"pecan-code-hardening-by-integration-testing",children:(0,s.jsx)(n.a,{href:"#testing",children:"PEcAn Code Hardening by Integration Testing"})}),"\n",(0,s.jsx)(n.p,{children:"The proposed project aims to enhance the reliability of PEcAn's integration tests by prioritizing packages associated with overall workflow bottlenecks. The focus will be on preparing contributors to gain an in-depth understanding of PEcAn's inner workings and the interactions between modules. It will commence with prioritizing basic runs to establish a robust foundation that include single site, single model runs to cover the major models. Subsequently, attention will shift towards ensemble runs, diversifying testing scenarios to ensure comprehensive coverage. A specific emphasis will be placed on Data Simulation models for single site, single model runs, with a focus on prominent models. This initiative aims to provide contributors with a holistic perspective on PEcAn's functionality, fostering a deeper understanding of how individual modules contribute to the overall workflow. By combining these elements, the GSoC project seeks to create a structured and immersive learning experience that equips participants to contribute effectively to PEcAn's development while addressing critical workflow bottlenecks."}),"\n",(0,s.jsx)(n.p,{children:(0,s.jsx)(n.strong,{children:"Expected outcome:"})}),"\n",(0,s.jsxs)(n.ul,{children:["\n",(0,s.jsx)(n.li,{children:"Increased module and model coverage in PEcAn\u2019s automated integration tests; contributors can understand which components are and are not covered by existing tests."}),"\n"]}),"\n",(0,s.jsx)(n.p,{children:(0,s.jsx)(n.strong,{children:"Prerequisites:"})}),"\n",(0,s.jsxs)(n.ul,{children:["\n",(0,s.jsx)(n.li,{children:"R"}),"\n"]}),"\n",(0,s.jsxs)(n.p,{children:[(0,s.jsx)(n.strong,{children:"Contact person:"}),"\nChris Black (@infotroph), Shashank Singh (@moki1202)"]}),"\n",(0,s.jsxs)(n.p,{children:[(0,s.jsx)(n.strong,{children:"Duration:"}),"\nFlexible to work as either a Small (175hr) or Large (350 hr)"]}),"\n",(0,s.jsxs)(n.p,{children:[(0,s.jsx)(n.strong,{children:"Difficulty:"}),"\nMedium, Large"]}),"\n",(0,s.jsx)(n.hr,{}),"\n",(0,s.jsx)(n.h4,{id:"optimize-pecan-for-freestanding-use-of-single-packages-r-package-development",children:(0,s.jsx)(n.a,{href:"#freestanding",children:"Optimize PEcAn for freestanding use of single packages [R package development]"})}),"\n",(0,s.jsx)(n.p,{children:"PEcAn was designed as a system of independent modules, each implemented as its own R package that was intended to be usable either standalone or as part of the full PEcAn system. Subsequent development focused on the most common cross-module workflows has lead to tighter coupling between modules than was originally intended, so that in practice many of the modules are now challenging to use, test, or develop without a full understanding of their interdependencies. Further, some packages expect inputs and outputs in data structures that are only generated by other PEcAn packages but might be more easily provided in standard well-known formats. We seek proposals to re-loosen these couplings by revisiting the design and interface of PEcAn packages through one or more of:"}),"\n",(0,s.jsxs)(n.ol,{children:["\n",(0,s.jsx)(n.li,{children:"Refactoring code to remove unneeded dependencies, simplify package interfaces, and exchange data in standard formats"}),"\n",(0,s.jsx)(n.li,{children:"Identifying exported functions that are not core to the functionality of the package, and removing them or making them internal"}),"\n",(0,s.jsx)(n.li,{children:"Writing tests and examples that demonstrate freestanding use of the package"}),"\n",(0,s.jsx)(n.li,{children:"Developing methods for tracking the dependencies between packages that cannot be eliminated, including how these change between package versions\nProposals for this project should choose a subset of these approaches and apply them to a specified subset of the PEcAn packages. Strong proposals will clearly show why each chosen package should be a priority, how it will become more independent at the completion of the project, and what interface changes will be needed to achieve this."}),"\n"]}),"\n",(0,s.jsx)(n.p,{children:(0,s.jsx)(n.strong,{children:"Expected outcome:"})}),"\n",(0,s.jsxs)(n.ul,{children:["\n",(0,s.jsx)(n.li,{children:"One or more PEcAn packages can be installed, used, and/or tested without the user needing to know [something previously important] about [another package]."}),"\n"]}),"\n",(0,s.jsx)(n.p,{children:(0,s.jsx)(n.strong,{children:"Prerequisites:"})}),"\n",(0,s.jsxs)(n.ul,{children:["\n",(0,s.jsxs)(n.li,{children:["Familiarity with R, especially how it manages dependencies between packages, and with concepts of software package development. Helpful resources: ",(0,s.jsx)(n.a,{href:"https://devguide.ropensci.org/index.html",children:"rOpenSci packages"})," and ",(0,s.jsx)(n.a,{href:"https://r-pkgs.org",children:"R packages"}),". Experience with multi-package code bases will be very helpful."]}),"\n"]}),"\n",(0,s.jsxs)(n.p,{children:[(0,s.jsx)(n.strong,{children:"Contact person:"}),"\nChris Black @infotroph, Shashank Singh @moki1202"]}),"\n",(0,s.jsxs)(n.p,{children:[(0,s.jsx)(n.strong,{children:"Duration:"}),"\nFlexible to work as either a Small (175hr) or Large (350 hr)"]}),"\n",(0,s.jsxs)(n.p,{children:[(0,s.jsx)(n.strong,{children:"Difficulty:"}),"\nMedium, Large"]}),"\n",(0,s.jsx)(n.hr,{}),"\n",(0,s.jsx)(n.h4,{id:"pecan-model-coupling-and-development-data-science",children:(0,s.jsx)(n.a,{href:"#coupling",children:"PEcAn model coupling and development [Data Science]"})}),"\n",(0,s.jsx)(n.p,{children:"PEcAn has the capability to interface multiple ecological models. The goal of this project is to improve the coupling of existing models to PEcAn (specifically FATES) and add new models (specifically a simple vegetation model that is under development). It is also possible to contribute to the development of the simple vegetation model which is written in fortran."}),"\n",(0,s.jsx)(n.p,{children:(0,s.jsx)(n.strong,{children:"Expected outcome:"})}),"\n",(0,s.jsxs)(n.ul,{children:["\n",(0,s.jsx)(n.li,{children:"New or improved PEcAn model packages."}),"\n"]}),"\n",(0,s.jsx)(n.p,{children:(0,s.jsx)(n.strong,{children:"Prerequisites:"})}),"\n",(0,s.jsxs)(n.ul,{children:["\n",(0,s.jsx)(n.li,{children:"R, Fortran is an advantage."}),"\n"]}),"\n",(0,s.jsxs)(n.p,{children:[(0,s.jsx)(n.strong,{children:"Contact person:"}),"\nHui Tang @Hui Tang, Istem Fer @istfer"]}),"\n",(0,s.jsxs)(n.p,{children:[(0,s.jsx)(n.strong,{children:"Duration:"}),"\nFlexible to work as either a Small (175hr) or Large (350 hr)"]}),"\n",(0,s.jsxs)(n.p,{children:[(0,s.jsx)(n.strong,{children:"Difficulty:"}),"\nMedium"]}),"\n",(0,s.jsx)(n.hr,{}),"\n",(0,s.jsx)(n.h4,{id:"development-of-notebook-based-pecan-workflows",children:(0,s.jsx)(n.a,{href:"#notebook",children:"Development of Notebook-based PEcAn Workflows"})}),"\n",(0,s.jsx)(n.p,{children:"The PEcAn workflow is currently run using either a web based user interface, an API, or custom R scripts. The web based user interface is easiest to use, but has limited functionality whereas the custom R scripts and API are more flexible, but require more experience."}),"\n",(0,s.jsxs)(n.p,{children:["This project will focus on building Quarto workflows aimed at providing an interface to PEcAn that is both welcoming to new users and flexible enough to be a starting point for more advanced users. It will build on existing ",(0,s.jsx)(n.a,{href:"https://github.com/PecanProject/pecan/pull/1733",children:"Pull Request 1733"}),"."]}),"\n",(0,s.jsx)(n.p,{children:(0,s.jsx)(n.strong,{children:"Expected outcome:"})}),"\n",(0,s.jsxs)(n.ul,{children:["\n",(0,s.jsx)(n.li,{children:"Two or more template workflows for running the PEcAn workflow. Written vignette and video tutorial introducing their use."}),"\n"]}),"\n",(0,s.jsx)(n.p,{children:(0,s.jsx)(n.strong,{children:"Prerequisites:"})}),"\n",(0,s.jsxs)(n.ul,{children:["\n",(0,s.jsx)(n.li,{children:"Familiarity with R. Familiarity with R studio and Quarto or Rmarkdown is a plus."}),"\n"]}),"\n",(0,s.jsxs)(n.p,{children:[(0,s.jsx)(n.strong,{children:"Contact person:"}),"\nDavid LeBauer @dlebauer, Nihar Sanda @koolgax99"]}),"\n",(0,s.jsxs)(n.p,{children:[(0,s.jsx)(n.strong,{children:"Duration:"}),"\nSmall (175hr)"]}),"\n",(0,s.jsxs)(n.p,{children:[(0,s.jsx)(n.strong,{children:"Difficulty:"}),"\nMedium"]}),"\n",(0,s.jsx)(n.hr,{}),"\n",(0,s.jsx)(n.h4,{id:"pecan-in-the-cloud",children:(0,s.jsx)(n.a,{href:"#cloud",children:"PEcAn in the cloud"})}),"\n",(0,s.jsx)(n.p,{children:"The PEcAn system is a complex system with many microservices such as the database system, frontend, models, job management etc. These microservices lend themselves to be deployed in the cloud. We have an existing helm chart that should get you most of the way there and should allow you to deploy pecan on kubernetes. Additionally there is a docker-compose file that should allow you to deploy PEcAn on a single server using docker."}),"\n",(0,s.jsx)(n.p,{children:"This project will take the helm chart and docker-compose files and harden them and upgrade them to use the latest versions of containers. The current system uses the shared folder not only to deploy data in all services, but also uses it to let the central system know when executions are finished. We would like to move away from this shared system and use the message system to indicate executions are done, and use a file service to pull and push data (for example from/to S3)."}),"\n",(0,s.jsx)(n.p,{children:(0,s.jsx)(n.strong,{children:"Expected outcome:"})}),"\n",(0,s.jsxs)(n.ul,{children:["\n",(0,s.jsx)(n.li,{children:"Updates to docker-compose and helm chart, as well as code submissions to mark executions as finished using RabbitMQ and file push/pull functionality when executing jobs."}),"\n"]}),"\n",(0,s.jsx)(n.p,{children:(0,s.jsx)(n.strong,{children:"Prerequisites:"})}),"\n",(0,s.jsxs)(n.ul,{children:["\n",(0,s.jsx)(n.li,{children:"Familiarity with Kubernetes, Docker, Helm and R. Familiarity with RabbitMQ and postgreSQL is a plus"}),"\n"]}),"\n",(0,s.jsxs)(n.p,{children:[(0,s.jsx)(n.strong,{children:"Contact person:"}),"\nRob Kooper @kooper, Samu Varjonen @samu, Istem Fer @istfer"]}),"\n",(0,s.jsxs)(n.p,{children:[(0,s.jsx)(n.strong,{children:"Duration:"}),"\nLarge (350 hr)"]}),"\n",(0,s.jsxs)(n.p,{children:[(0,s.jsx)(n.strong,{children:"Difficulty:"}),"\nMedium"]})]})}function h(e={}){const{wrapper:n}={...(0,i.R)(),...e.components};return n?(0,s.jsx)(n,{...e,children:(0,s.jsx)(d,{...e})}):d(e)}},8453:(e,n,t)=>{t.d(n,{R:()=>a,x:()=>r});var s=t(6540);const i={},o=s.createContext(i);function a(e){const n=s.useContext(o);return s.useMemo((function(){return"function"==typeof e?e(n):{...n,...e}}),[n,e])}function r(e){let n;return n=e.disableParentContext?"function"==typeof e.components?e.components(i):e.components||i:a(e.components),s.createElement(o.Provider,{value:n},e.children)}}}]);