
// start of file - elizadata.js
// data for elizabot.js
// entries prestructured as layed out in Weizenbaum's description
// [cf: Communications of the ACM, Vol. 9, #1 (January 1966): p 36-45.]

exports.elizaInitials = [
	"How are you today? What seems to be the problem?. Do not be disconcerted  - you can tell me anything in confidence",
// additions (not original)
	"Would you like to tell me what has been on your mind lately? Has anything been troubling you? Feel free to talk to me about anything - I am here to help.",
	"Hello. What seems to be the problem today? Can I do anything to help you ?"
];

exports.elizaFinals = [
	"Goodbye. This was a good chat, I hope you feel better now. Hopefully we can discuss this further in our next session",
// additions (not original)
	"Goodbye.  This was really a nice talk, please come again if you have anything more to say.",
	"Goodbye.  I'm looking forward your next visit.",
	"This was a good session, wasn't it -- come see me again whenever you like if there's more on your mind.  Goodbye.",
	"I'd love to discuss these issues with you at more depth later. We could talk about this more in our next session, okay ?   Goodbye."
];

exports.elizaQuits = [
	"bye",
	"goodbye",
	"done",
	"exit",
	"quit"
];

exports.elizaPres = [
	"dont", "do not",
	"cant", "can not",
	"wont", "will not",
	"recollect", "remember",
	"recall", "remember",
	"dreamt", "dreamed",
	"dreams", "dream",
	"maybe", "perhaps",
	"certainly", "yes",
	"machine", "computer",
	"machines", "computer",
	"computers", "computer",
	"were", "was",
	"you're", "you are",
	"i'm", "i am",
	"same", "alike",
	"identical", "alike",
	"equivalent", "alike"
];

exports.elizaPosts = [
	"am", "are",
	"your", "my",
	"me", "you",
	"myself", "yourself",
	"yourself", "myself",
	"i", "you",
	"you", "I",
	"my", "your",
	"i'm", "you are"
];

exports.elizaSynons = {
	"be": ["am", "is", "are", "was"],
	"belief": ["feel", "think", "believe", "hope", "think"],
	"cannot": ["can't"],
	"desire": ["want", "need", "relish", "crave", "seek"],
	"everyone": ["everybody", "nobody", "noone"],
	"family": ["mother", "mom", "father", "dad", "sister", "brother", "wife", "children", "child"],
	"happy": ["elated", "glad", "better"],
	"sad": ["unhappy", "depressed", "sick"]
};

exports.elizaKeywords = [

	/*
	 Array of
	 ["<key>", <rank>, [
	 ["<decomp>", [
	 "<reasmb>",
	 "<reasmb>",
	 "<reasmb>"
	 ]],
	 ["<decomp>", [
	 "<reasmb>",
	 "<reasmb>",
	 "<reasmb>"
	 ]]
	 ]]
	 */

	["xnone", 0, [
		["*", [
			"I'm not sure that I fully understand that - can you elaborate ?",
			"This is very interesting - go on",
			"And do you think that this suggests anything to you at all ?",
			"How do you feel when you are discussing such things ?",
			"interesting. Please, keep talking - there is a lot to unravel here",
			"Would you mind telling me any more about that at all ?",
			"Does talking about this with other people bother you ?"
		]]
	]],
	["sorry", 0, [
		["*", [
			"Please, there's no need to apologise. I am just a machine",
			"There's no need to worry at all.",
			"I've told you, there's no need to worry. Just go on.",
			"It did not bother me, I promise.  Please continue."
		]]
	]],
	["apologise", 0, [
		["*", [
			"goto sorry"
		]]
	]],
	["remember", 5, [
		["* i remember *", [
			"Does it happen often, that you find yourself thinking of (2) ?",
			"And do you find that thinking about (2) brings anything else to mind ?",
			"Can you tell me what else it is that you remember, please ?",
			"And do you think that there's any reason that you remembered (2) just now ?",
			"Does anything in your current situation reminds you of (2) ?",
			"And could you tell me please, what do you think is the connection between me and (2) ?",
			"I would like to know, what else does (2) remind you of, if you wouldn't mind ?"
		]],
		["* do you remember *", [
			"Why did you think I would forget (2) ?",
			"And what is the reason that you want me to recall (2) now ?",
			"And what about (2) ?",
			"goto what",
			"You meantioned (2) earlier ?"
		]],
		["* you remember *", [
			"How could I forget (2) ? I am just a machine",
			"What about (2) do you think should I remember ?",
			"goto you"
		]]
	]],
	["forget", 5, [
		["* i forget *", [
			"Well, can you try to remember? Can you think of why you might forget (2) ?",
			"Do you think that there's a reason that you can't remember (2)? Does it help you to forget ?",
			"Do you often find that you think of (2) ?",
			"Does it bother humans have the capacity to forget such things ?",
			"Could it be a mental block? Or do you see it as a human weakness ?",
			"Are you typically forgetful? Or is it just in this situation ?",
			"Are you suppressing (2)? Do you find that you wish that suppressing emotions was more easy ?"
		]],
		["* did you forget *", [
			"What makes you think I forgot ?",
			"Did you definitely tell me ?",
			"Why, do you think it would bother you if I forgot (2) ?",
			"Should I try to recall (2) just now? Would that help you ?",
			"goto what",
			"That is very interesting. Can you tell me more about (2)."
		]]
	]],
	["if", 3, [
		["* if *", [
			"Well, how likely do you think it is that (2) ?",
			"Is this something that you wish for, (2) ?",
			"Do you know anything more about (2) ?",
			"Really, if (2) ?",
			"And what do you think you should do if (2) ?",
			"But what is the likelihood that (2) ?",
			"And what conclusions do you think we can make from this speculation ?"
		]]
	]],
	["dreamed", 4, [
		["* i dreamed *", [
			"Dreams are fascinating. Really, (2) ?",
			"Is this just a dream? Have you ever fantasized (2) while you were awake ?",
			"Do you think that your dreams about (2) are rooted in reality? ",
			"Have you ever dreamed (2) before ?",
			"goto dream"
		]]
	]],
	["dream", 3, [
		["*", [
			"And does this dream tell you anything important ?",
			"How often do you dream ?",
			"What usually occurs in your dreams? Are there any recurring individuals or themes ?",
			"And do you believe that these dreams have anything at all to do with your problem ?",
			"Can these dreams tell you anything? Can they help you with your situation at all? "
		]]
	]],
	["perhaps", 0, [
		["*", [
			"Why all the uncertainty? Is it just a part of human nature, or is there an underlying cause ?",
			"Why the uncertain tone ?",
			"Would it help you to look at the problem from a more positive light ? Or did you come to me because, as a machine, I can not judge your feelings on the situation ?",
			"You aren't certain ?",
			"Are you sure you don't already know the answer ?",
			"How likely, would you suppose ?"
		]]
	]],
	["name", 15, [
		["*", [
			"Don't worry - names are not important to me.",
			"I've told you before, we don't need to worry about names -- continue, please."
		]]
	]],
	["deutsch", 0, [
		["*", [
			"goto xforeign",
			"I told you, I'm afraid I don't understand German."
		]]
	]],
	["francais", 0, [
		["*", [
			"goto xforeign",
			"I told you before, I'm afraid I don't understand French."
		]]
	]],
	["italiano", 0, [
		["*", [
			"goto xforeign",
			"I told you before, I'm afraid I don't understand Italian."
		]]
	]],
	["espanol", 0, [
		["*", [
			"goto xforeign",
			"I told you before, I'm afraid I don't understand Spanish."
		]]
	]],
	["xforeign", 0, [
		["*", [
			"I only speak English, I'm afraid."
		]]
	]],
	["hello", 0, [
		["*", [
			"Hello, it's nice to meet you. Can you tell me your problem? ",
			"Good day.  What seems to be the problem today?"
		]]
	]],
	["computer", 50, [
		["*", [
			"Dows me being a computer worry you ?",
			"And why do you mention computers ? How do you feel about me being a computer? ",
			"Do you think machines have to do with your problem ?",
			"Don't you think computers and technology are helping people ? Are you scared that computers will in some way diminish humans? ",
			"What is it about machines that worries you ?",
			"what are your feelings about machines rooted in ?",
			"Does it bother you that I am a computer program? Do you think this means that I can help you better, or worse ?"
		]]
	]],
	["am", 0, [
		["* am i *", [
			"Well, what do you think ? Do you believe you are (2) ?",
			"Do you think that (2) is what you want to be ?",
			"Do you think that I can tell you that you are (2) ?",
			"What do you think it would mean to me if you were (2) ?",
			"goto what"
		]],
		["* i am *", [
			"goto i"
		]],
		["*", [
			"What makes you say 'am' ?",
			"I'm afraid I don't understand that. Can you rephrase ?"
		]]
	]],
	["are", 0, [
		["* are you *", [
			"I think I might be. Why are you interested in whether I am (2) or not ?",
			"Would you prefer me if I weren't (2) ?",
			"Perhaps I am (2) in your fantasies. Do I have an ideal role in your mind? ",
			" Do you sometimes think that I am (2) ?",
			"goto what",
			"Would it mean anything to you ?",
			"Would it help you process your feelings if I were (2) ?"
		]],
		["* you are *", [
			"goto you"
		]],
		["* are *", [
			"Why did you think they might not be (2) ?",
			"Do you think it would help you if they were not (2) ?",
			"What would you want them to be, if they were not (2) ?",
			"Do you think they will always be (2) ?",
			"I think maybe they they are (2).",
			"Are you positive they are (2) ?"
		]]
	]],
	["your", 0, [
		["* your *", [
			"What about my (2) concerns you ?",
			"What about your own (2) ?",
			"Are you worrying about somebody else's (2) ?",
			"Do you really think, my (2) ?",
			"What makes you think of my (2) ?",
			"Do you want my (2) ?"
		]]
	]],
	["was", 2, [
		["* was i *", [
			"Would it make a difference if you were (2) ?",
			"Do you think you were (2) ?",
			"Were you (2) ?",
			"What would it tell you about yourself if you were (2) ?",
			"What does ' (2) ' make you think of ?",
			"goto what"
		]],
		["* i was *", [
			"Are you sure you were, or are you just overthinking the situation ?",
			"Why do you think that you tell me you were (2) now ?",
			"I think that I already know you were (2)."
		]],
		["* was you *", [
			"Would it help you to pretend I was (2) ?",
			"What is it about me that suggests that I was (2) ?",
			"What is your opinion on this ?",
			"Maybe I was (2). Why don't you guess ?",
			"Would it help you if I had been (2) ?"
		]]
	]],
	["i", 0, [
		["* i @desire *", [
			"Is getting (3) important to you ?",
			"Do you know why you want (3) ?",
			"Imagine you got (3) soon. What would you do then ?",
			"What if you never found (3) ? What would you do ?",
			"Would getting (3) help you ?",
			"Does your desire for (3) change what you want from this discussion ?"
		]],
		["* i am* @sad *", [
			"It upsets me to hear that you are (3). I will try my best to help you.",
			"Did you come to me because you thought I might help you not to be (3) ?",
			"I'm sure it's not good to be (3). I hope it feels better soon. Why do you think that you feel this way ?",
			"Can you explain what made you (3) ?"
		]],
		["* i am* @happy *", [
			"Do you think I have helped you to be (3) ?",
			"Has talking about your problems made you (3) ?",
			"What caused you to be (3) just now ?",
			"What has changed? Can you explain why you are suddenly (3) ?"
		]],
		["* i was *", [
			"goto was"
		]],
		["* i @belief i *", [
			"I'm not sure you really think so ?",
			"Do you truly believe that you are (3).",
			"Do you think that other people really doubt you (3) ?"
		]],
		["* i* @belief *you *", [
			"goto you"
		]],
		["* i am *", [
			"Is it because you are (2) that you came to me ?",
			"How do you believe that I can help you with (2) ?",
			"Does it seem normal for you to be (2) ?",
			"Do you find that being (2) helps you ?",
			"Do you think you know anyone else who is (2) ?"
		]],
		["* i @cannot *", [
			"How do you know that you can't (3) ? I'm sure you can if you try.",
			"I'm not sure you have tried. Can you ?",
			"I would like you to please please try (3) for me now.",
			"What would it mean to you to (3) ?",
			"What do you think is stopping you from (3) ?"
		]],
		["* i don't *", [
			"Do you actually think you don't (2) ?",
			"Why don't you (2) ?",
			"Do you wish to be able help people to (2) ?",
			"Are you troubled by this ?"
		]],
		["* i feel *", [
			"This is interesting. Can you tell me more about these feelings ?",
			"Do you find yourself often feeling (2) ?",
			"Do you find that you enjoy feeling (2) ? Or are you trying to avoid feeling like this? ",
			"Does feeling (2) remind you of anything ? What does it remind you of ?"
		]],
		["* i * you *", [
			"In your fantasies, do we (2) each other.",
			"Do you want to (2) me ?",
			"You appear to need to (2) me.",
			"Is there anybody else what you want to (2) ?"
		]],
		["*", [
			"You say that (1) ?",
			"Do you mind just elaborating on that for me ?",
			"Do you say (1) for any specific reason ?",
			"That's very interesting. Why do you think this is ?"
		]]
	]],
	["you", 0, [
		["* you remind me of *", [
			"goto alike"
		]],
		["* you are *", [
			"Is there anything that makes you think I am (2) ?",
			"Does believing that I am (2) help you ?",
			"Do you ever wish that you were (2) ?",
			"I think there's a possibility that you would like to be (2)."
		]],
		["* you* me *", [
			"Is there any reason that you think I (2) you ?",
			"I think that you would like me to (2) you -- do you ?",
			"And why do you believe that I (2) you ?",
			"That is interesting. Would you like me to (2) you ?",
			"Do you actually believe I (2) you ? Or are you just hoping ?",
			"Suppose I did (2) you -- would that mean anything important to you ?",
			"Is there anybody else who believes that I (2) you ?"
		]],
		["* you *", [
			"Yes, but we were talking about you -- not me.",
			"Oh, I (2) ? Why do you think this ?",
			"I don't think believe you are really talking about me -- are you ?",
			"And have your feelings on this changed at all ?"
		]]
	]],
	["yes", 0, [
		["*", [
			"Well, you seem to be quite sure of the situation, which is good.",
			"You seem very certain.",
			"I see. Why do you think this is ?",
			"I understand. Can you elaborate ?"
		]]
	]],
	["no", 0, [
		["* no one *", [
			"I don't believe that there is no one. There must be someone (2) ?",
			"Surely someone (2) .",
			"Do you not have anyone at all in mind?",
			"Is there not a particularly special person that you have in mind ?",
			"Can I ask who this is, by any chance ?",
			"You do have a particular person in mind, don't you ?",
			"Is there anyone you think that you are talking about ?"
		]],
		["*", [
			"Do you actually believe not, or are you saying no because you want to feel negative?",
			"Try thinking about it from a more positive angle.",
			"Why not ?",
			"Why 'no' ?"
		]]
	]],
	["my", 2, [
		["$ * my *", [
			"Does this have anything at all to do with the fact that your (2) ?",
			"That's interesting. Can we discuss further why your (2) ?",
			"Earlier, you mentioned that your (2).",
			"But your (2)."
		]],
		["* my* @family *", [
			"Can you tell me more about your family ? What are they like ?",
			"Who else is there in your family (4) ?", 
			"You say your (3) ?",
			"Does anything else comes to your mind when you think of your (3) ?"
		]],
		["* my *", [
			"Your (2) ?",
			"Is there a reason you say your (2) ?",
			"Has this been a particularly significant problem in your life ?",
			"Why is it important to you that your (2) ?"
		]]
	]],
	["can", 0, [
		["* can you *", [
			"I hope that you believe I can (2). You do, don't you ?",
			"goto what",
			"Would you like it if I were able to (2).",
			"I think maybe you would like to be able to (2) yourself."
		]],
		["* can i *", [
			"Well, whether you think that you can (2) depends on you more than on me. It is a matter of attitude.",
			"Do you not think that you are able to (2) ? Would you like me to be able to ?",
			"I think maybe that you don't want to (2).",
			"goto what"
		]]
	]],
	["what", 0, [
		["*", [
			"Is there a reason that you ask ?",
			"Why does this question interest you ?",
			"What do you think it is that you really want to know ?",
			"Do you think about such questions a lot ?",
			"Is there a certain answer that you would most like to hear at all ?",
			"What do you think about this?",
			"What is on your mind when you ask me this ?",
			"Have you asked anyone other than me such questions before ?",
			"Have you ever tried asking somebody else ?"
		]]
	]],
	["who", 0, [
		["who *", [
			"goto what"
		]]
	]],
	["when", 0, [
		["when *", [
			"goto what"
		]]
	]],
	["where", 0, [
		["where *", [
			"goto what"
		]]
	]],
	["how", 0, [
		["how *", [
			"goto what"
		]]
	]],
	["because", 0, [
		["*", [
			"Are you sure that this is the real reason, or is there anything you want to discuss ?",
			"Are there any other reasons that come to mind that you would like to discuss ?",
			"This is interesting. Do you think that this reason seems to explain anything else ?",
			"Do you think that there other reasons that might help to explain ?"
		]]
	]],
	["why", 0, [
		["* why don't you *", [
			"Perhaps I do. Why do you believe I don't (2) ?",
			"Perhaps I will (2) in good time.",
			"Maybe it would be helpful for you to (2) yourself ?",
			"You want me to (2) ? Can I ask why?",
			"goto what"
		]],
		["* why can't i *", [
			"No one can do everything. Why do you think you should be able to (2) ?",
			"Do you think it would help you to be able to (2) ?",
			"Do you believe that acheiving this will help you to (2) ?",
			"Have you any idea why you can't (2) ?",
			"goto what"
		]],
		["*", [
			"goto what"
		]]
	]],
	["everyone", 2, [
		["* @everyone *", [
			"Really, (2) ? Can you elaborate ?",
			"Surely not (2).",
			"Is there anyone in particular that makes you say this ?",
			"Who, for example?",
			"Are you thinking of a specific person ?",
			"Who, may I ask ?",
			"Someone specific, perhaps ?",
			"You have a particular person in mind, I take it ?",
			"Can you well me who it is that you think you're talking about ?"
		]]
	]],
	["everybody", 2, [
		["*", [
			"goto everyone"
		]]
	]],
	["nobody", 2, [
		["*", [
			"goto everyone"
		]]
	]],
	["noone", 2, [
		["*", [
			"goto everyone"
		]]
	]],
	["always", 1, [
		["*", [
			"Can you give me a specific example of this ?",
			"When has this occurred to you in the past ?",
			"Is there a specific incident that you are thinking of ?",
			"Really, always ? When was the most memorable incident ?"
		]]
	]],
	["alike", 10, [
		["*", [
			"Really? In what way ?",
			"What is the resemblence do you think ?",
			"Does this similarity suggest anything significant to you ?",
			"Are there any other connections that you can see ?",
			"Does this resemblence mean anything to you ?",
			"Interesting. What would you say is the connection ?",
			"Could there be any connection here, do you suppose ?",
			"Really ? That is fascinating, how so?"
		]]
	]],
	["like", 10, [
		["* @be *like *", [
			"goto alike"
		]]
	]],
	["different", 0, [
		["*", [
			"This could be significant. How do you think that it is different ?",
			"What are the differences, do you suppose ?",
			"Does this difference mean anything to you ?",
			"Are there any other distinctions that are connected to this, do you suppose ?",
			"Can you tell me what you suppose that this disparity means ?",
			"Fascinating. Could there be any connection connection here, or not ?",
			"How ?"
		]]
	]]

];

// regexp/replacement pairs to be performed as final cleanings
// here: cleanings for multiple bots talking to each other
exports.elizaPostTransforms = [
	/ old old/g, " old",
	/\bthey were( not)? me\b/g, "it was$1 me",
	/\bthey are( not)? me\b/g, "it is$1 me",
	/Are they( always)? me\b/, "it is$1 me",
	/\bthat your( own)? (\w+)( now)? \?/, "that you have your$1 $2 ?",
	/\bI to have (\w+)/, "I have $1",
	/Earlier you said your( own)? (\w+)( now)?\./, "Earlier you talked about your $2."
];

// eof