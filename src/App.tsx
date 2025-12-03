import { useState } from 'react';
import { ChevronRight, ChevronLeft } from 'lucide-react';

// Type definitions
interface Slide {
  type?: string;
  heading: string;
  text: string;
  imageUrl?: string;
}

// ============================================
// EDITABLE CONTENT SECTION - UPDATE YOUR TEXT AND IMAGES HERE
// ============================================
const CONTENT = {
  introduction: {
    title: "Creative Collaboration with AI",
    subtitle: "A Position Portfolio",
    slides: [
      {
        heading: "Welcome to the Command Center",
        text: "As I was thinking about the question, 'How should we approach creative collaboration with AI,' I found myself reflecting more deeply on the projects that I created this semester, and to what extent they were truly collaborative processes. Inherent in the word 'collaboration' is the notion of shared power and expertise: it is a democratic approach to creation where the human and the machine bring their strengths and limitations to the table in - ideally - an elegant complementarity.\nIn reality, I found this semester that it was too easy to let the dials of creative power turn to one or the other extreme. In certain projects, I let AI take over almost completely: I was, in hindsight, too dependent on its vision, its creative abilities, and its seductive power to build on ideas in a way that I would never have thought of. In other projects, I wielded near-complete power over AI, treating it as an obedient tool: I wanted to achieve a predetermined output, and I did not want to give AI any creative license. Neither of these modes characterise collaboration. It has taken me the entirety of our six weeks together to begin understanding what creative collaboration with AI might look like.\nToday, I invite you into my control panel: play around with the dials and see what you discover about how my thinking has evolved in this course. I hope you have as much fun exploring it as I did creating it!"
      }
    ],
    authorName: "Sanjana Kothary"
  },
  
  projects: {
    aiControlled: {
      title: "Rahnuma and Ilmo",
      slides: [
        {
          type: "text",
          heading: "The Project",
          text: "Above is a screenshot of the very first project I attempted to make in our vibe coding class: an interactive story about a young South Asian girl named Rahnuma (tr. \"guide/leader in Urdu-Hindi) and her robot friend, Ilmo (a derivation of \"ilm,\" tr. \"wisdom/knowledge\" in Urdu-Hindi). I wanted this story to help children understand how robots learn, and what the limits to their learning are. Through this story, I wanted children to take away that robots are smart and can learn many things if we make the effort to teach them correctly, but that they can also be taught things that are wrong. I also wanted to underscore the fact that there are certain things that only human beings can feel and understand, and that robots might make fun playmates in certain ways, but that they are no replacement for human connection. As you can probably infer from the thrust of this story, I came into this course feeling excited but skeptical about AI - especially its impacts on our youngest, most impressionable learners. Having had no background in coding and minimal use of AI aside from ChatGPT, I was also initially doubtful of my own ability to succeed in this course, and thus opted to build this interactive story in Replit, which was branded as the \"low-code\" pathway.",
          imageUrl: "images/RI1.png"
        },
        {
          type: "text",
          heading: "Relying on GenAI",
          text: "This screenshot from a brainstorm session that I had with ChatGPT demonstrates how heavily I was relying on GenAI for this project. I had given ChatGPT a brief description of what I wanted my project to focus on, and in turn, I received a complete four-act story - all within seconds!",
          imageUrl: "images/RI2.png"
        },
        {
          type: "text",
          heading: "The Interactive Elements",
          text: "ChatGPT was even able to suggest interactive elements that I could embed into the story to get children to really think about the concepts in the narrative. Again, I thought this was phenomenal. I asked ChatGPT to generate a detailed prompt for Replit, which I then fed in. However, as I began to design in Replit, I realised this project was not going the way I wanted it to. First, in my excitement, I hadn't recognised that ChatGPT had given me a plot that covered only half of what I had wanted in my story: there was no discussion of how robots could be taught to do the wrong thing, nor was there any exploration of how robots learn patterns but do not truly feel or connect in the way humans do. Realising this was probably too large a scope for a single story, I let it slide. However, when I began designing even the pattern recognition game that had seemed so straightforward, I realised it made little practical sense: what I had created was a game that helped children label items - it would show a picture of, for instance, an apple and a red ball, and say something like \"Ilmo thinks these are the same. Can you help him learn what they are?\" Children would then click the words \"apple\" and \"ball.\" However, I was dissatisfied with this game: it was not teaching children why Ilmo thought the items were the same, or how he was learning. I wanted Replit to modify the game so that children could guess at why Ilmo was confused (\"he thinks they are the same because he sees a pattern: they are both red and round!\") or how to help him differentiate (\"apples have stems and leaves, but balls don't\") rather than simply name everyday items. I also realised that the young children I was designing for may not be able to type out their reasoning, and would need a voice-recognition feature to be able to play the game independently.",
          imageUrl: "images/RI3.png"
        },
        {
          type: "text",
          heading: "When Things Fell Apart",
          text: "As I tried to fix these errors, my project started to devolve. Replit was stuck. It had fixated on the first iteration of the game I wanted to make, and wouldn't stray too far from it no matter what I tried. As I suggested more and more changes, it got more and more confused, eliminating my characters, dialogue boxes, and all the features we had initially created. At this point, I saw that it was pointless to move forward: I would have to abandon the project and start from scratch if I had any hope of creating what I had envisioned. However, this experience taught me an important lesson about working with AI: if my initial project or prompting was unclear even to me, I would end up with a non-functional product. Outsourcing the little details to AI the way I had done in this project was not the timesaving miracle I had initially thought it was - it only made it harder to get things back on track later on. As someone who typically uses AI judiciously and with a lot of critical oversight in more academic, analytical tasks, I was  surprised at my own willingness to lean on it so heavily for this creative undertaking. Later, when we read Licklider's predictions on man-computer symbiosis, I realised that in this project, I had violated the division of labor he outlined, namely humans \"set[ting] the goals, formulat[ing] the hypotheses, determin[ing] the criteria, and perform[ing] the evaluations,\" (Licklider, 1960, p.4) while machines handled routinizable, clerical, and mechanical work. I had let the machines do the heavy lifting, and my project had suffered. In retrospect, I think I understand my temptation to outsource my creative thinking in this way. Research, analysis and academic writing come naturally to me: having completed my research-heavy undergraduate degree before ChatGPT became publicly available, I know when GenAI is not doing what it should. I use it only to speed up routine tasks, and am quick to push back or complete a task manually when it does not perform to my standards. By contrast, vibe coding - and this kind of creative generation - was completely new to me. I trusted AI's ideas over my own, and did not intervene even where I had the skills to. It is seeing this tendency realised in myself that makes me cautious about how we must teach the next generation to use AI: for them, GenAI will be what water is to a fish. It will have been there all their lives, available when they are unsure about themselves or their abilities. Knowing this, how can we as educators and policymakers ensure that the next generation is able to develop expertise and confidence in their abilities so that they can truly co-create, and not one-sidedly depend on, GenAI? How do we ensure that Licklider's symbiotic relationship remains symbiotic, and that man does not outsource our share of the labour to machines too?",
          imageUrl: "images/RI4.png"
        },
        {
          type: "text",
          heading: "Crawford's Insights",
          text: "I also want to share how Kate Crawford's assertion that AI is \"neither artificial nor intelligent\" (Crawford, 2021, p.8)  surfaced in my very first foray into vibe coding. As I was first fleshing out the visuals for Rahnuma and Ilmo's characters, I had decided I wanted Rahnuma to be a young South Asian girl so that children from my part of the world could see themselves in this story. My exact instructions to Replit were that Rahnuma was to be \"a 6 year old South Asian girl who is friendly, curious, and eager to learn.\" This screenshot shows what Replit first generated. Note that I had never said that Rahnuma needed to be wearing traditional Indian dress: AI had filled in those gaps, and made an assumption about who Rahnuma would be simply because I had described her as South Asian. There are many things wrong with this assumption: first, the first few iterations of Rahnuma depict her wearing a bindi, a small sticker on the forehead which is characteristic of Hindus, who are the majority share of the population only in the South Asian countries of India and Nepal. Not only had Replit decided that Rahnuma was Indian (South Asian could have very well meant Pakistani or Bangladeshi, for instance), but it had also decided that she was Hindu (she could have been Muslim, Christian, Sikh, Parsi, or Buddhist, just to name a few). Furthermore, it chose to depict Rahnuma in the most traditional manner possible: even in the most remote villages of India, few 6-year-old girls wear full traditional dress! This simple choice by Replit on mirrors a few truths of the real world: (1) the hegemony of India in South Asia (2) the symbolic power of the Hindu majority within India and (3) the continued view of South Asian as a traditional society that remains uninfluenced by global trends. I cannot think of a more fitting example of Crawford's argument than this: ultimately, humans and their biases, politics, and worldviews necessarily impact the way that LLMs are trained and the outputs that AI provides.",
          imageUrl: "images/RI5.png"
        }
      ],
      theoreticalFramework: {
        title: "References",
        slides: [
          {
            heading: "References",
            text: "Crawford, K. (2021). Introduction. In Atlas of AI: Power, politics, and the planetary costs of artificial intelligence. essay, Yale University Press.\n\nLicklider, J. C. R. (1960). Man-Computer Symbiosis. IRE Transactions on Human Factors in Electronics, HFE-1(1), 4–11. https://doi.org/10.1109/THFE2.1960.4503259"
          }
        ]
      }
    },
    
    aiAsTool: {
      title: "Audacious Education Purposes Dashboard", 
      slides: [
        {
          type: "text",
          heading: "The Project",
          text: "This is an example of a project in which I exercised complete control over the creative process, using AI only as a means to an end. This semester, I am enrolled in Professor Fernando Reimers' course, \"Education Policy Analysis in International and Comparative Perspective.\" As part of this course, we use the textbook \"Audacious Education Purposes,\" which details ambitious education reforms in a number of different countries. One of the activities that we frequently engage in is to come up with advice that we would have given the education minister at the beginning of the reform. I was always curious what this advice, if it had been taken into account, would have resulted in. For the Week 4 prompt of our Vibe Coding course, \"build something that answers a question,\" I built a companion to the textbook. Here, you can see that each chapter in the book corresponds to a different tab on the dashboard.",
          imageUrl: "images/A1.png"
        },
        {
          type: "text",
          heading: "The Features",
          text: "Once a student clicks into the tab for a country, they can see the entire chapter summarised in a series of succinct bullet points. These points help the student understand what the causes for the reform were, who the main actors were, and what the impact of the reform was.",
          imageUrl: "images/A2.png"
        },
        {
          type: "text",
          heading: "Analysis",
          text: "Finally, students can use an embedded AI chatbot to draft their advice to the minister, and generate a counterfactual for how things might have played out differently if their advice had been taken into account at the beginning of the reform. This project was a big lift compared to the artifacts I had created before in the course. In order to get the dashboard up and running - and potentially allow for its use by my classmates in the course - I had to learn how to use Claude Code in VS Studio (no more low-code pathway for me!), how to connect my work in VS Studio to Github, how to integrate ChatGPT's API into my web-app, and how to publish my work to Git Pages. If you had told me in Week 1 that I would actually want to spend hours figuring out how to make all this work, I would never have believed you! Nonetheless, this experience showed me what a powerful motivator a genuine investment in what you are building can be - a testament to the constructionist principles at the heart of this course. This project continues to be one I am extremely proud of.\n\nHowever, as I was looking over my design journal with the prompt for the position portfolio in mind, I realised that this project was not a good representation of creative collaboration, either. I had sketched out my vision for the dashboard on paper beforehand, and was meticulous about the details that I fed to Claude Code: I did not want to relinquish any creative control to AI, for fear that my web-app would not function the way I wanted it to. As I review my work, I am reminded of the arguments that Wiener (1950) and Minsky (1982) make: in essence, they both posit that human beings must learn when to relinquish control, though to differing degrees. While Wiener argues that we must delegate tasks requiring lower levels of judgement to machines, Minsky asserts that AI's performance inherently exceeds the instructions we give it. We must give up strict control of the output, he implies, allowing AI the agency to come up with creative solutions that we, as its human collaborators, have not yet explored. I am not sure if I agree with this for every task. I think part of learning how to use AI responsibly is to learn when to use it as a collaborator, and when to use it merely as an executor of commands. In a project like this, which is designed as an instructional experience, there is very little creative license: as a budding instructional designer, I know best what I would like my students (or, in this case, my colleagues) to take away from interacting with this web-app. In this setting, I choose to use AI more as Wiener imagined: I don't have to undertake the laborious tasks of learning how to code from scratch, or manually typing in data from a book. Instead, I can focus my energies on designing an output that maximises students' engagement and learning. For other tasks, Minsky's position makes more sense. Click on the \"Collaborative\" tab to see an example of a project where I used this approach!",
          imageUrl: "images/A3.png"
        }
      ],
      theoreticalFramework: {
        title: "References",
        slides: [
          {
            heading: "References",
            text: "Minsky, M. (1982). Why People Think Computers Can't. The AI Magazine, 3(4), 3–15. https://doi.org/10.1609/aimag.v3i4.376\n\nThe First and The Second Industrial Revolution. (n.d.). In Wiener, N., in The human use of human beings: Cybernetics and society."
          }
        ]
      }
    },
    
    collaborative: {
      title: "Chef Jadoo's Kitchen",
      slides: [
        {
          type: "text",
          heading: "The Project",
          text: "For our penultimate Vibe Coding class, \"Build something that inspires play,\" I worked on this interactive Urdu-Hindi learning game for young South Asian diaspora learners. In this level, children practice the construction \"Mujhey ____ Chahiye\" (tr. \"I want ___) with the lovable monster, Chef Jadoo. The game is full of surprises and silliness, and reinforces language learning while also appealing to children's senses of curiosity and play. This was one of the most technically complex projects I undertook, since it required voice recognition in Urdu-Hindi, an AI voiceover (which I created in ElevenLabs), Urdu-Hindi sample sentences (which I ended up having to record myself, due to the paucity of existing AI-generated audio for these languages) and tremendous iteration on the visuals of the game. In this project, I think I came close to achieving true creative collaboration with AI: I was able to strike a balance between articulating my own creative vision while also strategically relinquishing some creative control. This project is where I truly saw Minsky's assertion realised: I was astonished, and perhaps even a little intimidated, by the creative power of AI. In projects like this, I realised, it would be wasteful to limit AI's creative potential to the automation of lower-level tasks as Wiener (1950) and Licklider (1960) proposed.",
          imageUrl: "images/JK1.mp4"
        },
        {
          type: "text",
          heading: "Technical Challenges",
          text: "Here is the first artifact I created for the game during a workshop on AI video generation by LDIT alum Luis Gaitan. I fell in love with the visuals that Veo3 had created for me based on my description, and was sorely disappointed to realise that Replit and Claude Code's animation capabilities were nowhere near Veo3's. After hours of iteration (and a lot of help from the Vibe Coding teaching team), we realised that Replit and Claude Code can create beautiful, detailed static images, but not animations. If I wanted an animation that resembled what I had created in Veo3, I would need to have AI generate a series of static images that I could run together at high speeds to create a stop-motion style animation. At this stage, I learned, human collaboration is still a necessity: AI is impressive, but it is not magical. There are still many limitations to its capabilities, and problem-solving around those limitations is a key skill that human beings will need to learn in this new age.\n\nI faced a similar challenge when trying to create scaffolds for the language learning tasks: I wanted children to be able to click on the ingredients to hear their names in Urdu-Hindi, and to be able to hear the grammatical structure for \"I want ___\" pronounced each time they clicked on the sample sentence in the bottom right-hand corner. I cycled through a number of AI-generated Urdu-Hindi voices, but could not find any that pronounced the words correctly. I did not want to settle for an inaccurate pronunciation that would teach children incorrectly, so I opted to record these sample words and phrases myself and embed them into the program. I think this project also threw into sharp relief for me the gap between resources available in English versus in other languages.",
          imageUrl: "images/JK2.mp4"
        },
        {
          type: "text",
          heading: "Reflections",
          text: "As we read Hao's (2025) poignant and deeply moving chapter on the impact of AI on language loss and the fight to revitalise te reo using a small, specialised, and ethical language model, I was prompted to reflect more deeply on my own project. I wanted to use AI technology to rekindle young learners' interest in my mother tongue(s) of Urdu and Hindi. On the one hand, it is true that AI affords us a level of interactivity and engagement that has never previously been possible, and thus might actually be successful in preventing language loss among diaspora learners. However, it is also true that to achieve this goal, I am using a technology that actively contributes - at a large scale - to the same language loss I am trying to prevent. In talking to a classmate about my concerns, he shared his reflections about a similar tradeoff between the positive educational uses of AI and the environment. We had both enjoyed our Vibe Coding adventures tremendously, and agreed that it provided learners the motivation to amass more and more advanced technical skills - skills that they might not otherwise have put in the time and effort to learn. However, he struggled with letting engagement and motivation define whether or not to teach vibe coding in the classroom - \"if we let students think vibe coding is so much fun,\" he said, \"are they going to be motivated to address the environmental consequences of, say, coding a game within minutes or creating an automation for every little inconvenience?\" Sometimes as we grapple with the impacts of AI, it feels as though we are solving one problem only to exacerbate another. I think these concerns deeply inform my final (or, rather, final-for-now) position on how we should approach creative collaboration. Click 'Next' to read my final-for-now takeaways!",
          imageUrl: "images/JK3.png"
        }
      ],
      theoreticalFramework: {
        title: "References",
        slides: [
          {
            heading: "References",
            text: "Epilogue. (2025). In K. [author] Hao, Empire of AI : dreams and nightmares in Sam Altman's OpenAI (pp. 409–421). Penguin Press.\n\nLicklider, J. C. R. (1960). Man-Computer Symbiosis. IRE Transactions on Human Factors in Electronics, HFE-1(1), 4–11. https://doi.org/10.1109/THFE2.1960.4503259\n\nThe First and The Second Industrial Revolution. (n.d.). In Wiener, N., in The human use of human beings: Cybernetics and society."
          }
        ]
      }
    }
  },
  
  reflection: {
    title: "Final Position",
    subtitle: "",
    slides: [
      {
        heading: "As human beings and educators, it is our duty to establish WHAT collaboration means, WHEN to collaborate, and HOW to collaborate with AI.",
        text: "**What collaboration means:** not every use of AI is collaborative. When we use AI (or teach our students to), we need to ensure that there is capacity for true collaboration. Some questions we can ask ourselves are: do we (or our students) know enough in this situation to bring our own expertise to the table, or are we relying on AI to do the heavy lifting for us? Are we making the choice to use AI intentionally for what it can bring to the table, or are we engaging AI because we don't want to do the work/are running short on time/are too overwhelmed to know where to begin?\n\n**When to collaborate:** in a world where AI is at our fingertips, we must learn (and teach!) that (a) not every task requires AI and (b) not every task that uses AI requires its creative participation. Part of learning to use AI responsibly and judiciously will mean asking of ourselves: is AI really the right collaborative partner for this task, or the most convenient one? Is there someone in our circles who can better help us brainstorm/ideate/argue/create? What ideas or avenues do we close off when we ask AI to collaborate? Is it worth it for this task to ignore those potentialities? Is this a task where I want to use AI as a co-creator or just a tool, and why? We need to learn and teach the difference between \"AI-worthy\" tasks and \"human-worthy\" tasks - even as those definitions continue to shift.\n\n**How to collaborate:** ultimately, understanding the logics of exploitation and coercion, of bias and homogenization, and of extraction and depletion is our responsibility as human beings (and even more as educators). Not every student at every level is going to be able to understand Crawford or Hao or Benjamin, but we need to be able to embed these concepts in age-appropriate ways throughout our digital curricula. We need to make clear to future users of AI that these models are not magical, nor do they appear out of thin air. Power and politics inhere at each step, and we as users need to be cognisant and critical, even as we embrace creative collaboration with AI. We must also ensure that policy and regulatory frameworks are channeled to encode these safeguards into the design and usage of these systems, and are not afterthoughts or mere checkboxes on a compliance chart. While the responsibility for creation may be shared increasingly between man and machine, the responsibility for ethical and sustainable creation can never be outsourced: this is an undertaking that we as human beings must commit ourselves to wholeheartedly."
      }
    ]
  }
};
// ============================================
// END EDITABLE CONTENT SECTION
// ============================================

const ControlPanel = () => {
  const [screen, setScreen] = useState(0);
  const [aiTouch, setAiTouch] = useState(100);
  const [humanTouch, setHumanTouch] = useState(0);
  const [activeTheory, setActiveTheory] = useState(false);
  const [introSlide, setIntroSlide] = useState(0);
  const [projectSlide, setProjectSlide] = useState(0);
  const [theorySlide, setTheorySlide] = useState(0);
  const [reflectionSlide, setReflectionSlide] = useState(0);
  
  const setDialPosition = (ai: number) => {
    setAiTouch(ai);
    setHumanTouch(100 - ai);
    setProjectSlide(0);
    setActiveTheory(false);
  };

  const handleAiDialChange = (value: number) => {
    const snapped = Math.round(value / 50) * 50;
    setAiTouch(snapped);
    setHumanTouch(100 - snapped);
  };
  
  const getCurrentProject = () => {
    if (aiTouch === 100) return CONTENT.projects.aiControlled;
    if (aiTouch === 0) return CONTENT.projects.aiAsTool;
    if (aiTouch === 50) return CONTENT.projects.collaborative;
    return null;
  };

  const SlideNavigation = ({ currentSlide, totalSlides, onPrev, onNext }: { currentSlide: number; totalSlides: number; onPrev: () => void; onNext: () => void }) => (
    <div className="flex items-center justify-between mt-4 pt-4 border-t border-slate-700">
      <button
        onClick={onPrev}
        disabled={currentSlide === 0}
        className={`${
          currentSlide === 0 ? 'opacity-30 cursor-not-allowed' : 'hover:bg-amber-500'
        } bg-amber-400 text-slate-900 font-bold p-2 rounded-full border-2 border-amber-600 transition-all`}
      >
        <ChevronLeft size={20} />
      </button>
      <span className="text-slate-400 font-mono text-sm">
        {currentSlide + 1} / {totalSlides}
      </span>
      <button
        onClick={onNext}
        disabled={currentSlide === totalSlides - 1}
        className={`${
          currentSlide === totalSlides - 1 ? 'opacity-30 cursor-not-allowed' : 'hover:bg-amber-500'
        } bg-amber-400 text-slate-900 font-bold p-2 rounded-full border-2 border-amber-600 transition-all`}
      >
        <ChevronRight size={20} />
      </button>
    </div>
  );

  // Introduction Screen
  const IntroScreen = () => {
    const currentSlide: Slide = CONTENT.introduction.slides[introSlide];
    
    return (
      <div className="min-h-screen bg-gradient-to-br from-slate-800 via-slate-700 to-slate-900 p-8">
        <div className="max-w-5xl mx-auto">
          {/* Main Screen */}
          <div className="bg-gradient-to-b from-slate-900 to-black rounded-t-lg border-4 border-slate-800 p-12 min-h-[500px] flex flex-col">
            <div className="text-center mb-8">
              <div className="inline-block bg-amber-400 px-4 py-1 rounded mb-4">
                <div className="w-3 h-3 bg-amber-600 rounded-full inline-block mr-2 animate-pulse"></div>
                <span className="text-slate-900 font-mono text-sm font-bold">SYSTEM ACTIVE</span>
              </div>
              <h1 className="text-5xl font-bold text-amber-400 mb-2 font-mono tracking-wider" style={{textShadow: '0 0 20px rgba(251, 191, 36, 0.5)'}}>
                {CONTENT.introduction.title}
              </h1>
              <h2 className="text-2xl text-slate-300 font-mono">{CONTENT.introduction.subtitle}</h2>
            </div>
            
            <div className="flex-1 bg-slate-800 rounded p-8 border-2 border-amber-400/30 overflow-auto">
              <h3 className="text-2xl font-bold text-amber-400 mb-6" style={{fontFamily: 'Courier New, monospace'}}>{currentSlide.heading}</h3>
              <div className="text-slate-200 text-xl leading-relaxed space-y-4" style={{fontFamily: 'Courier New, monospace'}}>
                {currentSlide.text.split('\n').map((para, idx) => (
                  para.trim() && <p key={idx}>{para}</p>
                ))}
              </div>
            </div>
            
            {CONTENT.introduction.slides.length > 1 && (
              <SlideNavigation
                currentSlide={introSlide}
                totalSlides={CONTENT.introduction.slides.length}
                onPrev={() => setIntroSlide(Math.max(0, introSlide - 1))}
                onNext={() => setIntroSlide(Math.min(CONTENT.introduction.slides.length - 1, introSlide + 1))}
              />
            )}
          </div>
          
          {/* Control Panel Base */}
          <div className="bg-gradient-to-b from-slate-600 to-slate-700 rounded-b-lg border-4 border-t-0 border-slate-800 p-6">
            <div className="text-center">
              <p className="text-amber-400 font-mono mb-4">— {CONTENT.introduction.authorName}</p>
              <div className="flex gap-4 justify-center items-center">
                {screen > 0 && (
                  <button
                    onClick={() => setScreen(screen - 1)}
                    className="bg-slate-700 hover:bg-slate-600 text-amber-400 font-mono font-bold py-3 px-6 rounded-lg border-4 border-slate-800 shadow-2xl flex items-center gap-2 transition-all"
                  >
                    <ChevronLeft size={20} />
                    BACK
                  </button>
                )}
                <div className="flex gap-4">
                  <div className="w-16 h-2 bg-amber-400 rounded"></div>
                  <div className="w-16 h-2 bg-slate-600 rounded"></div>
                  <div className="w-16 h-2 bg-slate-600 rounded"></div>
                </div>
                {screen < screens.length - 1 && (
                  <button
                    onClick={() => setScreen(screen + 1)}
                    className="bg-slate-700 hover:bg-slate-600 text-amber-400 font-mono font-bold py-3 px-6 rounded-lg border-4 border-slate-800 shadow-2xl flex items-center gap-2 transition-all"
                  >
                    NEXT
                    <ChevronRight size={20} />
                  </button>
                )}
              </div>
            </div>
          </div>
        </div>
      </div>
    );
  };

  // Control Panel Screen
  const ControlPanelScreen = () => {
    const currentProject = getCurrentProject();
    const displaySlides = activeTheory
      ? currentProject?.theoreticalFramework.slides
      : currentProject?.slides;
    const currentSlideIndex = activeTheory ? theorySlide : projectSlide;
    const setCurrentSlide = activeTheory ? setTheorySlide : setProjectSlide;
    const currentSlide: Slide | undefined = displaySlides?.[currentSlideIndex];
    const displayTitle = activeTheory 
      ? currentProject?.theoreticalFramework.title 
      : currentProject?.title;
    
    return (
      <div className="min-h-screen bg-gradient-to-br from-slate-800 via-slate-700 to-slate-900 p-8">
        <div className="max-w-5xl mx-auto">
          
          {/* Main Screen */}
          <div className="bg-gradient-to-b from-slate-900 to-black rounded-t-lg border-4 border-slate-800 p-8 min-h-[600px] flex flex-col">
            <div className="mb-4 flex items-center justify-center gap-3">
              <div className="w-2 h-2 bg-red-500 rounded-full animate-pulse"></div>
              <h2 className="text-2xl font-bold text-amber-400 font-mono">COMMAND CENTER</h2>
              <div className="w-2 h-2 bg-green-500 rounded-full animate-pulse"></div>
            </div>

            {currentSlide ? (
              <div className="flex-1 flex flex-col bg-slate-800 rounded p-6 border-2 border-amber-400/30">
                <div className="mb-4">
                  <div className="flex items-center gap-2 mb-2">
                    <div className="w-2 h-2 bg-amber-400 rounded-full animate-pulse"></div>
                    <h3 className="text-xl font-bold text-amber-400 font-mono">{displayTitle}</h3>
                  </div>
                </div>
                
                {currentSlide.imageUrl && (
                  currentSlide.imageUrl.match(/\.(mp4|mov|webm)$/i) ? (
                    <video
                      src={currentSlide.imageUrl}
                      controls
                      className="w-full h-96 object-contain rounded border-2 border-slate-700 mb-4 bg-slate-900"
                    >
                      Your browser does not support the video tag.
                    </video>
                  ) : (
                    <img
                      src={currentSlide.imageUrl}
                      alt={currentSlide.heading}
                      className="w-full h-96 object-contain rounded border-2 border-slate-700 mb-4 bg-slate-900"
                    />
                  )
                )}
                
                <div className="flex-1 overflow-auto">
                  <p className="text-slate-200 text-2xl leading-relaxed whitespace-pre-line">
                    {currentSlide.text}
                  </p>
                </div>

                <SlideNavigation
                  currentSlide={currentSlideIndex}
                  totalSlides={displaySlides?.length || 0}
                  onPrev={() => setCurrentSlide(Math.max(0, currentSlideIndex - 1))}
                  onNext={() => setCurrentSlide(Math.min((displaySlides?.length || 1) - 1, currentSlideIndex + 1))}
                />
              </div>
            ) : (
              <div className="flex-1 flex items-center justify-center bg-slate-800 rounded border-2 border-slate-700">
                <div className="text-center">
                  <div className="w-16 h-16 border-4 border-amber-400 border-t-transparent rounded-full animate-spin mx-auto mb-4"></div>
                  <p className="text-slate-500 font-mono">Select a mode to view project</p>
                  <p className="text-slate-600 font-mono text-sm mt-2">Use controls below</p>
                </div>
              </div>
            )}
          </div>

          {/* Control Panel */}
          <div className="bg-gradient-to-b from-slate-600 to-slate-700 rounded-b-lg border-4 border-t-0 border-slate-800 p-6">
            <div className="grid grid-cols-3 gap-8 mb-6">
              
              {/* AI Dial */}
              <div className="text-center">
                <label className="block text-amber-400 font-mono font-bold mb-3 text-sm">AI TOUCH</label>
                <div className="relative inline-block">
                  <div className="w-24 h-24 bg-gradient-to-br from-slate-700 to-slate-900 rounded-full border-4 border-slate-800 flex items-center justify-center shadow-lg">
                    <div 
                      className="absolute w-1 h-10 bg-amber-400 origin-bottom rounded-t shadow-lg"
                      style={{
                        transform: `rotate(${(aiTouch / 100) * 270 - 135}deg)`,
                        bottom: '50%',
                        left: 'calc(50% - 0.5px)'
                      }}
                    ></div>
                    <span className="text-2xl font-bold text-amber-400 font-mono z-10">{aiTouch}</span>
                  </div>
                  <input
                    type="range"
                    min="0"
                    max="100"
                    step="50"
                    value={aiTouch}
                    onChange={(e) => handleAiDialChange(parseInt(e.target.value))}
                    className="w-full mt-3"
                  />
                </div>
              </div>

              {/* Preset Buttons */}
              <div className="flex flex-col justify-center gap-3">
                <button
                  onClick={() => setDialPosition(100)}
                  className={`${aiTouch === 100 ? 'bg-red-500 border-red-700' : 'bg-red-600 border-red-800'} hover:bg-red-500 text-white font-mono font-bold py-2 px-3 rounded border-2 shadow-lg transition-all text-sm`}
                >
                  AI CONTROLLED
                </button>
                <button
                  onClick={() => setDialPosition(0)}
                  className={`${aiTouch === 0 ? 'bg-blue-500 border-blue-700' : 'bg-blue-600 border-blue-800'} hover:bg-blue-500 text-white font-mono font-bold py-2 px-3 rounded border-2 shadow-lg transition-all text-sm`}
                >
                  HUMAN CONTROLLED
                </button>
                <button
                  onClick={() => setDialPosition(50)}
                  className={`${aiTouch === 50 ? 'bg-amber-400 border-amber-600' : 'bg-amber-500 border-amber-700'} hover:bg-amber-400 text-slate-900 font-mono font-bold py-2 px-3 rounded border-2 shadow-lg transition-all text-sm`}
                >
                  COLLABORATIVE
                </button>
              </div>

              {/* Human Dial */}
              <div className="text-center">
                <label className="block text-amber-400 font-mono font-bold mb-3 text-sm">HUMAN TOUCH</label>
                <div className="relative inline-block">
                  <div className="w-24 h-24 bg-gradient-to-br from-slate-700 to-slate-900 rounded-full border-4 border-slate-800 flex items-center justify-center shadow-lg">
                    <div 
                      className="absolute w-1 h-10 bg-amber-400 origin-bottom rounded-t shadow-lg"
                      style={{
                        transform: `rotate(${(humanTouch / 100) * 270 - 135}deg)`,
                        bottom: '50%',
                        left: 'calc(50% - 0.5px)'
                      }}
                    ></div>
                    <span className="text-2xl font-bold text-amber-400 font-mono z-10">{humanTouch}</span>
                  </div>
                  <div className="mt-3 text-slate-500 font-mono text-xs">AUTO-SYNC</div>
                </div>
              </div>
            </div>

            {/* Theory Buttons */}
            <div className="pt-4 border-t-2 border-slate-800">
              <div className="flex justify-center">
                <button
                  onClick={() => {
                    setActiveTheory(!activeTheory);
                    setTheorySlide(0);
                  }}
                  className={`${
                    activeTheory ? 'bg-green-500 border-green-700' : 'bg-slate-700 border-slate-600'
                  } hover:bg-green-400 text-white font-mono text-sm font-bold py-3 px-6 rounded border-2 shadow-lg transition-all`}
                >
                  REFERENCES
                </button>
              </div>
            </div>

            {/* Progress */}
            <div className="flex gap-4 justify-center items-center mt-6">
              {screen > 0 && (
                <button
                  onClick={() => setScreen(screen - 1)}
                  className="bg-slate-700 hover:bg-slate-600 text-amber-400 font-mono font-bold py-3 px-6 rounded-lg border-4 border-slate-800 shadow-2xl flex items-center gap-2 transition-all"
                >
                  <ChevronLeft size={20} />
                  BACK
                </button>
              )}
              <div className="flex gap-4">
                <div className="w-16 h-2 bg-amber-400 rounded"></div>
                <div className="w-16 h-2 bg-amber-400 rounded"></div>
                <div className="w-16 h-2 bg-slate-600 rounded"></div>
              </div>
              {screen < screens.length - 1 && (
                <button
                  onClick={() => setScreen(screen + 1)}
                  className="bg-slate-700 hover:bg-slate-600 text-amber-400 font-mono font-bold py-3 px-6 rounded-lg border-4 border-slate-800 shadow-2xl flex items-center gap-2 transition-all"
                >
                  NEXT
                  <ChevronRight size={20} />
                </button>
              )}
            </div>
          </div>
        </div>
      </div>
    );
  };

  // Reflection Screen
  const ReflectionScreen = () => {
    const currentSlide = CONTENT.reflection.slides[reflectionSlide];
    
    return (
      <div className="min-h-screen bg-gradient-to-br from-slate-800 via-slate-700 to-slate-900 p-8">
        <div className="max-w-5xl mx-auto">
          {/* Main Screen */}
          <div className="bg-gradient-to-b from-slate-900 to-black rounded-t-lg border-4 border-slate-800 p-12 min-h-[500px] flex flex-col">
            <div className="text-center mb-8">
              <div className="inline-block bg-orange-500 px-4 py-1 rounded mb-4">
                <div className="w-3 h-3 bg-orange-700 rounded-full inline-block mr-2 animate-pulse"></div>
                <span className="text-white font-mono text-sm font-bold">FINAL TRANSMISSION</span>
              </div>
              <h1 className="text-4xl font-bold text-orange-400 mb-2 font-mono tracking-wider" style={{textShadow: '0 0 20px rgba(251, 146, 60, 0.5)'}}>
                {CONTENT.reflection.title}
              </h1>
            </div>
            
            <div className="flex-1 bg-slate-800 rounded p-8 border-2 border-orange-400/30">
              <h3 className="text-2xl font-bold text-orange-400 font-mono mb-4" dangerouslySetInnerHTML={{
                __html: currentSlide.heading.replace(/WHAT/g, '<span style="color: #FFC107;">WHAT</span>').replace(/WHEN/g, '<span style="color: #FFC107;">WHEN</span>').replace(/HOW/g, '<span style="color: #FFC107;">HOW</span>')
              }}></h3>
              <div className="text-slate-200 text-2xl leading-relaxed whitespace-pre-line" dangerouslySetInnerHTML={{
                __html: currentSlide.text.replace(/\*\*(.*?)\*\*/g, '<span style="color: #FFC107; font-weight: bold;">$1</span>')
              }}></div>
            </div>
            
            <SlideNavigation
              currentSlide={reflectionSlide}
              totalSlides={CONTENT.reflection.slides.length}
              onPrev={() => setReflectionSlide(Math.max(0, reflectionSlide - 1))}
              onNext={() => setReflectionSlide(Math.min(CONTENT.reflection.slides.length - 1, reflectionSlide + 1))}
            />
          </div>
          
          {/* Control Panel Base */}
          <div className="bg-gradient-to-b from-slate-600 to-slate-700 rounded-b-lg border-4 border-t-0 border-slate-800 p-6">
            <div className="text-center">
              <div className="flex gap-4 justify-center items-center mb-4">
                {screen > 0 && (
                  <button
                    onClick={() => setScreen(screen - 1)}
                    className="bg-slate-700 hover:bg-slate-600 text-amber-400 font-mono font-bold py-3 px-6 rounded-lg border-4 border-slate-800 shadow-2xl flex items-center gap-2 transition-all"
                  >
                    <ChevronLeft size={20} />
                    BACK
                  </button>
                )}
                <div className="flex gap-4">
                  <div className="w-16 h-2 bg-amber-400 rounded"></div>
                  <div className="w-16 h-2 bg-amber-400 rounded"></div>
                  <div className="w-16 h-2 bg-amber-400 rounded"></div>
                </div>
                {screen < screens.length - 1 && (
                  <button
                    onClick={() => setScreen(screen + 1)}
                    className="bg-slate-700 hover:bg-slate-600 text-amber-400 font-mono font-bold py-3 px-6 rounded-lg border-4 border-slate-800 shadow-2xl flex items-center gap-2 transition-all"
                  >
                    NEXT
                    <ChevronRight size={20} />
                  </button>
                )}
              </div>
              <p className="text-slate-400 font-mono text-sm">END OF PORTFOLIO</p>
            </div>
          </div>
        </div>
      </div>
    );
  };

  const screens = [IntroScreen, ControlPanelScreen, ReflectionScreen];
  const CurrentScreen = screens[screen];

  return (
    <div className="relative">
      <CurrentScreen />
    </div>
  );
};

export default ControlPanel;