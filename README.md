# POC Related with react-native. One sorce 3 platforms (Web, IOS, Android)

## How to make it run:

First of all you must have react-native-client running on your system

1 - Download the repo

2 - run npm install

Mobile version:
```
run react-native run-ios (requires xcode)
```

![Imgur](https://i.imgur.com/LMTmV0i.png)

Web version:
```
./node_modules/.bin/webpack-dev-server --inline
```
![Imgur](https://i.imgur.com/oWjV1d0.png)


## Positive points regarding the code:

- For small UI components this solution could be really powerful and agile to have code on prod in 3 platforms at once.

- Environment setup is not so painful.

- Fast development

## Negative points:

- We should invest time to know how to integrate partial RN code on an existing IOS/Android project

- Is a cool project but doesn't have alot of tags that can be used [Available tags here](https://necolas.github.io/react-native-web/storybook/)

- Some CSS features are hard to replicate on a mobile environment (shadows, blurs, animations etc...)

- Auto sized boxes are hard to replicate on RN


As you can see on the screenshots the final result are really close between devices:

