## nad3r.de

Nad3r is a personal portfolio website showcasing the work of Nad3r. It is built using React and Firebase.

### Setup

To set up Nad3r, you will need to have Firebase Tools installed. To install Firebase Tools, run the following command:

```
npm install -g firebase-tools
```

Once Firebase Tools is installed, you will need to login to your Firebase account. To do this, run the following command:

```
firebase login
```

Once you are logged in, you will need to install the dependencies for Nad3r. To do this, run the following command:

```
npm i --force
```

After the dependencies are installed, you will need to build the project. To do this, run the following command:

```
npm run build
```

Once the project is built, you will need to initialize Firebase Hosting. To do this, run the following command:

```
firebase init
```

When prompted, select "Hosting" and answer "Yes" when asked if you would like to use an existing project. For all other questions, answer "No".

Once Firebase Hosting is initialized, you will need to deploy the project. To do this, run the following command:

```
firebase deploy
```

Your personal portfolio website should now be live!
