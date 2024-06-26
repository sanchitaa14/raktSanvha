# **JEEVANREKHA**
It is a web app which displays information of blood availability in blood banks, also the information of ongooing camps and where they are being held. It employs a new feature which allows the delivery of blood from the blood bank to either the hospital or the certified person who requires it. Blood will be delivered through certified persons if implemented in real-world.

## Overview

### _Features_:
**A chatbot**: Helps people clear their doubts about the website and what it does, clear their doubts regarding the requirements for blood donation.

**Location Tracking**: The person upon opening the website can check the distance to their nearest blood bank, and also the locations of the blood banks in the vicinity.

**ML model**: Checks the authenticity of the prescription submitted by the person who wantes to order the blood from our website.

**Donor Profile**: Upon registeration a profile is created of the donor, which can be used to check when they last donated their blood and when will they be eligible for another donation.

### _Installation_
Clone the repository: https://github.com/sanchitaa14/raktSanvha

``` git clone ``` 
Install dependencies:



2.1 Run frontend

```
cd frontend
npm i
npm start
```
This home page will open on your browser
![image](https://github.com/sanchitaa14/raktSanvha/assets/118709611/5ab4be08-5b00-4a3d-9f7d-b94b4e62af07)


## Usage

Head to the donate now: Fill the form, and the details will be stored on the firebase and an appointment will be booked for you, regarding which the person who is going to donate will be contacted.

Create a camp: Register your camp online and then after which you camp details will be checked and then displayed, so that others might register for your camp.

Register for a camp: You can register for a camp and then go to the camp and donate your blood, your details of arrival and interest will be sent to the designated camp.

Order Blood: You can place an order for at most 3 blood bottles, the order will only be placed after the details of your prescription are checked through our ml model.

In the works:
The live location of nearby blood banks, are also displayed on the app, due to the expiration of the api key it is not working at the moment.

## Tech Stack
React.js

Javascript

Firebase

Tailwind CSS

Python





