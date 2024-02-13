# Resumiser - Efficient AI Resume Builder

## Team Members
- [Ayden - Resumizer](https://github.com/Resumizer) - branch: ayden
- [Danny - dcapua](https://github.com/dcapua) - branch: danny
- [Earth - earthcha](https://github.com/earthcha) - branch: earth
- [Henry - phhoang98a](https://github.com/phhoang98a) - branch: henry

## Features
* Build your resume with AI

## Latest Demo Mockups
### Sprint 2
- Design: https://www.figma.com/file/m1DXq5G9wP9tpF1SeZoF5d/Resumizer?type=design&node-id=204%3A111&mode=design&t=ofxu7vmKRs0PRRI2-1
#### Update 02/09/2024
##### Light Mode Design (Visual Desgin Live Demo Edition 1)
![Light Mode Mockup](public/sprint2/lightMockup.png "Light Mode Mockup")
##### Dark Mode Design (Visual Desgin Live Demo Edition 1)
![Dark Mode Mockup](public/sprint2/darkMockup.png "Dark Mode Mockup")


## Front-End
_**Tech stack**_

* React
* Tailwind CSS
 
_**Setup**_

1. Clone the repository
2. Type `cd frontend` in terminal
3. Install the dependencies by running `npm install` (NodeJS is a prerequisite)
4. Start the development server by running `npm run dev`
5. Open `http://localhost:5173` in your browser

## Back-end
### Job Server
_**Setup**_

1. cd `/backend/JobServer`
2. Install the dependencies by running `pip install -r requirements.txt`
3. Start the development server by running `flask run`

_**Apis**_
```yml
POST - http://127.0.0.1:5000/job

Body(JSON): 
- "job_title": Title of the job (Software engineer)
- "country": Country of job posts
- "location": Specific location (optional)

Result: List of job information about company, title, date_posted, job_url, location, site
```
<img width="712" alt="Screenshot 2024-02-02 at 4 55 53 AM" src="https://github.com/Resumizer/Resumizer/assets/34488386/9f102deb-af29-42b9-8250-0266c22be785">

### Resume Server
_**Setup**_

1. cd `/backend/ResumeServer`
2. Generate an `OPENAI_API_KEY` at OpenAI and add it to the `.env` file.
3. Install the dependencies by running `npm install`
4. Start the development server by running `npm start`

_**Apis**_
```yml
POST - http://localhost:3000

Body(form-data): 
- resume (File): PDF file
- jobTitle (text)
- openAIkey (text) 

Result: The new content of the resume.
```
![Screenshot 2024-02-13 at 4 50 58 PM](https://github.com/imayden/Resumizer/assets/34488386/95dde719-0ba4-4140-bab4-a0529245c7e8)


## Database
* TBD

## API
* OpenAI API - GPT



