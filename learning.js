How to remove an npm package at differnt levels? dev , global 
difference between npm remove and uninstall


Local Dependency - that package is installed speceifically for that projecet
    application dependent on it to run in production

Dev dependency - these are also installd specifically of rthe proect but the
    application is not dependent on it run in the production.
    for example if you take a testing library jest. your application doesnt need
    jest to run in the production. it only needs while developing the application.

dependencies are need by the application.
where as Devdependencies are needed by the developer or development process.

simple question to remember is 
    Does my application need this package when actually running?
    if yes then regular dependency else dev dependency.

Installation :
    regular dependency - npm i <package-name>
    devDependency - npm i --save-dev <package-name> or npm i -D <package-name>

global package - instals the package globally. not a best pracatice
    installation : npm i -g <package-name>

suppose if i have installed a package globally in node project. will it be availabe 
    in node_modules and package.json. if so in depenedencies or dev dependencies
    No, if you install a package globally (using the -g or --global flag), 
    it will not be available in your project's local node_modules folder, and 
    it will not be listed in your package.json (neither in dependencies nor devDependencies).

package.json - 
    its like index of a book for any project.
    tells the metadata associated with the project. 
    identity card + configuration file for the project.
     it tells npm that this is my project. these are the dependencies, these are the
     scripts and thers are some of its configuration details.

    The most important feature of package.json is that it dictates acceptable version ranges 
    for dependencies, rather than strict exact versions. It uses Semantic Versioning (SemVer) symbols:
    1. ^ (Caret): Allows minor and patch updates (e.g., ^1.2.3 will accept 1.2.4 or 1.3.0, but not 2.0.0).
    2. ~ (Tilde): Allows only patch updates (e.g., ~1.2.3 will accept 1.2.4, but not 1.3.0).

     
whenever you install a package, 2 things happen
    1. npm downloads the package and its dependencies into node_modules
    2. npm adds that package to package.json and package-lock.json.

node_modules is a folder where npm actually puts the packages the project uses.
    when you install a packages, along with this package some more packages on whom 
    express id dependent on will also gets installed. those are called thransitive dependency.
    for exampl your project is dependent on express. express is dependent on some other
    pakages like debug, cookies etc. therefore your project is indirectly dependent on those packages.
    There is no need to push node modules into git. npm can recreate node modules 
    using package and Package-lock.json.


package-lock.json 
    While package.json lists only your top-level dependencies, package-lock.json maps out your entire
     dependency tree. It records the exact version installed for express, plus the exact versions of every
     smaller package that express relies on.

     It records the exact versions and dependency information npm resolved.

    Dependencies never update themselves automatically in the background. Your application will keep using
     the exact versions currently inside your node_modules folder indefinitely until you manually execute a 
     command.

    If a package-lock.json exists, running npm install will not update your packages; it will strictly 
    install what is 
    in the lock file. The versions only update (within your ^ or ~ ranges) if you explicitly run npm update,
     run npm install <package>@latest, 
    or if you delete your package-lock.json and run npm install from scratch.

    Imagine you and I are working on the same Node.js project.
    I clone the project. if i only had package.json. 
    it might resolve dependency versions differently depending on when and how the installation happens.
    But with the lock file: package-lock.json
    npm has a precise dependency resolution to work from.


npm install vs npm ci

npx

