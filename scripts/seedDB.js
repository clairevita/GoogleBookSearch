const mongoose = require("mongoose");
const db = require("../models");

// This file empties the Books collection and inserts the books below

mongoose.connect(
  process.env.MONGODB_URI ||
  "mongodb://localhost/googlebooks"
);

const bookSeed = [
  {
    _id: "DapMtgEACAAJ",
    authors: ["Andrew Sean Greer"],
    title: "Less",
    description: "WINNER OF THE PULITZER PRIZE FOR FICTION 2018 'You will sob little tears of joy' Nell Zink 'I recommend it with my whole heart' Ann Patchett 'I adore this book' Armistead Maupin 'Charming, languid and incredibly funny, I absolutely adored Arthur' Jenny Colgan 'Marvellously, endearingly, unexpectedly funny' Gary Shteyngart 'Bedazzling, bewitching and be-wonderful' New York Times Book Review 'A fast and rocketing read . . . a wonderful, wonderful book!' Karen Joy Fowler 'Hilarious, and wise, and abundantly funny' Adam Haslett WHO SAYS YOU CAN'T RUN AWAY FROM YOUR PROBLEMS? Arthur Less is a failed novelist about to turn fifty. A wedding invitation arrives in the post: it is from an ex-boyfriend of nine years who is engaged to someone else. Arthur can't say yes - it would be too awkward; he can't say no - it would look like defeat. So, he begins to accept the invitations on his desk to half-baked literary events around the world. From France to India, Germany to Japan, Arthur almost falls in love, almost falls to his death, and puts miles between him and the plight he refuses to face. Less is a novel about mishaps, misunderstandings and the depths of the human heart.",
    image: "http://books.google.com/books/content?id=DapMtgEACAAJ&printsec=frontcover&img=1&zoom=1&source=gbs_api",
    link: "http://books.google.com/books?id=DapMtgEACAAJ&dq=less&hl=&cd=1&source=gbs_api",
  },

  {
    _id: "_jNwDwAAQBAJ",
    authors: ["Casey McQuiston"],
    title: "Red, White & Royal Blue",
    description: "* Instant NEW YORK TIMES and USA TODAY bestseller * * GOODREADS CHOICE AWARD WINNER for BEST DEBUT and BEST ROMANCE of 2019 * * BEST BOOK OF THE YEAR* for VOGUE, NPR, VANITY FAIR, and more! * What happens when America's First Son falls in love with the Prince of Wales? When his mother became President, Alex Claremont-Diaz was promptly cast as the American equivalent of a young royal. Handsome, charismatic, genius—his image is pure millennial-marketing gold for the White House. There's only one problem: Alex has a beef with the actual prince, Henry, across the pond. And when the tabloids get hold of a photo involving an Alex-Henry altercation, U.S./British relations take a turn for the worse. Heads of family, state, and other handlers devise a plan for damage control: staging a truce between the two rivals. What at first begins as a fake, Instragramable friendship grows deeper, and more dangerous, than either Alex or Henry could have imagined. Soon Alex finds himself hurtling into a secret romance with a surprisingly unstuffy Henry that could derail the campaign and upend two nations and begs the question: Can love save the world after all? Where do we find the courage, and the power, to be the people we are meant to be? And how can we learn to let our true colors shine through? Casey McQuiston's Red, White & Royal Blue proves: true love isn't always diplomatic. \"I took this with me wherever I went and stole every second I had to read! Absorbing, hilarious, tender, sexy—this book had everything I crave. I’m jealous of all the readers out there who still get to experience Red, White & Royal Blue for the first time!\" - Christina Lauren, New York Times bestselling author of The Unhoneymooners \"Red, White & Royal Blue is outrageously fun. It is romantic, sexy, witty, and thrilling. I loved every second.\" - Taylor Jenkins Reid, New York Times bestselling author of Daisy Jones & The Six",
    image: "http://books.google.com/books/content?id=_jNwDwAAQBAJ&printsec=frontcover&img=1&zoom=1&edge=curl&source=gbs_api",
    link: "http://books.google.com/books?id=_jNwDwAAQBAJ&printsec=frontcover&dq=red+white&hl=&cd=1&source=gbs_api",
  },

  {
    _id: "_2iHDwAAQBAJ",
    authors: ["E. M. Forster"],
    title: "The Life to Come",
    description: "From the literary icon, author of Howard’s End and A Passage to India, comes a posthumous collection of short works, many never before published. Featuring fourteen short stories, The Life to Come spans six decades of E. M. Forster’s literary career, tracking every phase of his development. Never having sought publication for most of the stories—only two were published in his lifetime—Forster worried his career would suffer because of their overtly homosexual themes. Instead they were shown to an appreciative circle of friends and fellow writers, including Christopher Isherwood, Siegfried Sassoon, Lytton Strachey, and T. E. Lawrence. With stories that are lively and amusing (“What Does It Matter?”; “The Obelisk”), and others that are more somber and thought-provoking (“Dr Woolacott”; “Arthur Snatchfold”), The Life to Come sheds a light on Forster’s powerful but suppressed explorations beyond the strictures of conventional society. “Have we been as ready for Forster’s honesty as we thought we were? His greatness surely had root in his capacity to treat all human relationships seriously and truthfully. . . . Even the earliest and most ephemeral of them will be recognized as the frailer embodiments of the same passionate convictions that made for the moral iron of his novels.” —Eudora Welty, The New York Times Book Review",
    image: "http://books.google.com/books/content?id=_2iHDwAAQBAJ&printsec=frontcover&img=1&zoom=1&edge=curl&source=gbs_api",
    link: "http://books.google.com/books?id=_2iHDwAAQBAJ&printsec=frontcover&dq=life+to+come+e.m.+forster&hl=&cd=1&source=gbs_api",
  },

  {
    _id: "k2asDwAAQBAJ",
    authors: ["Tom Fitzgerald", 
        "Lorenzo Marquez"],
    title: "Legendary Children",
    description: "A definitive deep-dive into queer history and culture with hit reality show RuPaul's Drag Race as a touchstone, by the creators of the pop culture blog Tom and Lorenzo From the singular voices behind Tom and Lorenzo comes the ultimate guide to all-things RuPaul's Drag Race and its influence on modern LGBTQ culture. Legendary Children centers itself around the idea that not only is RuPaul's Drag Race the queerest show in the history of television, but that RuPaul and company devised a show that serves as an actual museum of queer cultural and social history, drawing on queer traditions and the work of legendary figures going back nearly a century. In doing so, Drag Race became not only a repository of queer history and culture, but also an examination and illustration of queer life in the modern age. It is a snapshot of how LGBTQ folks live, struggle, work, and reach out to one another--and how they always have--and every bit of it is tied directly to Drag Race. Each chapter is an examination of a specific aspect of the show--the Werk Room, the Library, the Pit Crew, the runway, the Untucked lounge, the Snatch Game--that ties to a specific aspect of queer cultural history and/or the work of certain legendary figures in queer cultural history.",
    image: "http://books.google.com/books/content?id=k2asDwAAQBAJ&printsec=frontcover&img=1&zoom=1&edge=curl&source=gbs_api",
    link: "http://books.google.com/books?id=k2asDwAAQBAJ&printsec=frontcover&dq=legendary+children&hl=&cd=1&source=gbs_api",
  },

  {
    _id: "Lf99BAAAQBAJ",
    authors: ["Hanya Yanagihara"],
    title: "A Little Life",
    description: "ONE OF THE BEST BOOKS OF THE YEAR The New York Times • The Washington Post • The Wall Street Journal • NPR • Vanity Fair • Vogue • Minneapolis Star Tribune • St. Louis Post-Dispatch • The Guardian • O, The Oprah Magazine • Slate • Newsday • Buzzfeed • The Economist • Newsweek • People • Kansas City Star • Shelf Awareness • Time Out New York • Huffington Post • Book Riot • Refinery29 • Bookpage • Publishers Weekly • Kirkus WINNER OF THE KIRKUS PRIZE A MAN BOOKER PRIZE FINALIST A NATIONAL BOOK AWARD FINALIST A Little Life follows four college classmates—broke, adrift, and buoyed only by their friendship and ambition—as they move to New York in search of fame and fortune. While their relationships, which are tinged by addiction, success, and pride, deepen over the decades, the men are held together by their devotion to the brilliant, enigmatic Jude, a man scarred by an unspeakable childhood trauma. A hymn to brotherly bonds and a masterful depiction of love in the twenty-first century, Hanya Yanagihara’s stunning novel is about the families we are born into, and those that we make for ourselves.",
    image: "http://books.google.com/books/content?id=Lf99BAAAQBAJ&printsec=frontcover&img=1&zoom=1&edge=curl&source=gbs_api",
    link: "http://books.google.com/books?id=Lf99BAAAQBAJ&printsec=frontcover&dq=a+little+life&hl=&cd=1&source=gbs_api",
  },

  {
    _id: "eq0n9Ck79ysC",
    authors: ["Alison Bechdel"],
    title: "Fun Home",
    description: "A memoir done in the form of a graphic novel by a cult favorite comic artist offers a darkly funny family portrait that details her relationship with her father--a funeral home director, high school English teacher, and closeted homosexual.",
    image: "http://books.google.com/books/content?id=eq0n9Ck79ysC&printsec=frontcover&img=1&zoom=1&edge=curl&source=gbs_api",
    link: "http://books.google.com/books?id=eq0n9Ck79ysC&printsec=frontcover&dq=fun+home&hl=&cd=1&source=gbs_api",
  },

  {
    _id: "8X7WAAAAQBAJ",
    authors: ["Christopher Isherwood"],
    title: "A Single Man",
    description: "Welcome to sunny suburban 1960s Southern California. George is a gay middle-aged English professor, adjusting to solitude after the tragic death of his young partner. He is determined to persist in the routines of his former life. A Single Man follows him over the course of an ordinary twenty-four hours. Behind his British reserve, tides of grief, rage, and loneliness surge—but what is revealed is a man who loves being alive despite all the everyday injustices. When Christopher Isherwood's A Single Man first appeared, it shocked many with its frank, sympathetic, and moving portrayal of a gay man in maturity. Isherwood's favorite of his own novels, it now stands as a classic lyric meditation on life as an outsider.",
    image: "http://books.google.com/books/content?id=8X7WAAAAQBAJ&printsec=frontcover&img=1&zoom=1&edge=curl&source=gbs_api",
    link: "http://books.google.com/books?id=8X7WAAAAQBAJ&printsec=frontcover&dq=a+single+man&hl=&cd=1&source=gbs_api",
  },

  {
    _id: "D9yXDwAAQBAJ",
    authors: ["R. Eric Thomas"],
    title: "Here for It",
    description: "NATIONAL BESTSELLER • #ReadWithJenna Book Club Pick as Featured on Today • From the creator of Elle’s “Eric Reads the News,” a heartfelt and hilarious memoir-in-essays about growing up seeing the world differently, finding unexpected hope, and experiencing every awkward, extraordinary stumble along the way. “Pop culture–obsessed, Sedaris-level laugh-out-loud funny . . . [R. Eric Thomas] is one of my favorite writers.”—Lin-Manuel Miranda, Entertainment Weekly R. Eric Thomas didn’t know he was different until the world told him so. Everywhere he went—whether it was his rich, mostly white, suburban high school, his conservative black church, or his Ivy League college in a big city—he found himself on the outside looking in. In essays by turns hysterical and heartfelt, Thomas reexamines what it means to be an “other” through the lens of his own life experience. He explores the two worlds of his childhood: the barren urban landscape where his parents’ house was an anomalous bright spot, and the Eden-like school they sent him to in white suburbia. He writes about struggling to reconcile his Christian identity with his sexuality, the exhaustion of code-switching in college, accidentally getting famous on the internet (for the wrong reason), and the surreal experience of covering the 2016 election for Elle online, and the seismic changes that came thereafter. Ultimately, Thomas seeks the answer to these ever more relevant questions: Is the future worth it? Why do we bother when everything seems to be getting worse? As the world continues to shift in unpredictable ways, Thomas finds the answers to these questions by reenvisioning what “normal” means and in the powerful alchemy that occurs when you at last place yourself at the center of your own story. Here for It will resonate deeply and joyfully with everyone who has ever felt pushed to the margins, struggled with self-acceptance, or wished to shine more brightly in a dark world. Stay here for it—the future may surprise you.",
    image: "http://books.google.com/books/content?id=D9yXDwAAQBAJ&printsec=frontcover&img=1&zoom=1&edge=curl&source=gbs_api",
    link: "http://books.google.com/books?id=D9yXDwAAQBAJ&printsec=frontcover&dq=here+for+it&hl=&cd=1&source=gbs_api",
  },

  {
    _id: "opC3d3ltQ94C",
    authors: ["Madeline Miller"],
    title: "The Song of Achilles",
    description: "“At once a scholar’s homage to The Iliad and startlingly original work of art by an incredibly talented new novelist….A book I could not put down.” —Ann Patchett “Mary Renault lives again!” declares Emma Donoghue, author of Room, referring to The Song of Achilles, Madeline Miller’s thrilling, profoundly moving, and utterly unique retelling of the legend of Achilles and the Trojan War. A tale of gods, kings, immortal fame, and the human heart, The Song of Achilles is a dazzling literary feat that brilliantly reimagines Homer’s enduring masterwork, The Iliad. An action-packed adventure, an epic love story, a marvelously conceived and executed page-turner, Miller’s monumental debut novel has already earned resounding acclaim from some of contemporary fiction’s brightest lights—and fans of Mary Renault, Bernard Cornwell, Steven Pressfield, and Colleen McCullough’s Masters of Rome series will delight in this unforgettable journey back to ancient Greece in the Age of Heroes.",
    image: "http://books.google.com/books/content?id=opC3d3ltQ94C&printsec=frontcover&img=1&zoom=1&edge=curl&source=gbs_api",
    link: "http://books.google.com/books?id=opC3d3ltQ94C&printsec=frontcover&dq=song+of+achilles&hl=&cd=2&source=gbs_api",
  },

  {
    _id: "zZrFR3M5XukC",
    authors: ["James Baldwin"],
    title: "Giovanni's Room",
    description: "One of the BBC's '100 Novels That Shaped Our World' Baldwin's ground-breaking second novel, which established him as one of the great American writers of his time David, a young American in 1950s Paris, is waiting for his fiancée to return from vacation in Spain. But when he meets Giovanni, a handsome Italian barman, the two men are drawn into an intense affair. After three months David's fiancée returns and, denying his true nature, he rejects Giovanni for a 'safe' future as a married man. His decision eventually brings tragedy. Filled with passion, regret and longing, this story of a fated love triangle has become a landmark of gay writing. James Baldwin caused outrage as a black author writing about white homosexuals, yet for him the issues of race, sexuality and personal freedom were eternally intertwined. 'Exquisite... a feat of fire-breathing, imaginative daring' Guardian 'Excruciating beauty' San Francisco Chronicle 'Audacious... remarkable... elegant and courageous' Caryl Phillips",
    image: "http://books.google.com/books/content?id=zZrFR3M5XukC&printsec=frontcover&img=1&zoom=1&source=gbs_api",
    link: "http://books.google.com/books?id=zZrFR3M5XukC&dq=giovanni%27s+room&hl=&cd=2&source=gbs_api",
  },

  {
    _id: "CX6m7scQ4wcC",
    authors: ["Alice Walker"],
    title: "The Color Purple",
    description: "The lives of two sisters--Nettie, a missionary in Africa, and Celie, a Southern woman married to a man she hates--are revealed in a series of letters exchanged over thirty years.",
    image: "http://books.google.com/books/content?id=CX6m7scQ4wcC&printsec=frontcover&img=1&zoom=1&edge=curl&source=gbs_api",
    link: "http://books.google.com/books?id=CX6m7scQ4wcC&printsec=frontcover&dq=color+purple&hl=&cd=1&source=gbs_api",
  },

  {
    _id: "yPXY8iMIekkC",
    authors: ["Armistead Maupin"],
    title: "Tales of the City",
    description: "The eccentric, mysterious, naive, jaded, up-and-coming, down-and-out, adventuresome, and withdrawn boarders in Russian Hill share their dissimilar worlds and worries",
    image: "http://books.google.com/books/content?id=yPXY8iMIekkC&printsec=frontcover&img=1&zoom=1&edge=curl&source=gbs_api",
    link: "http://books.google.com/books?id=yPXY8iMIekkC&printsec=frontcover&dq=tales+of+the+city&hl=&cd=1&source=gbs_api",
  },

  {
    _id: "_OnXAwAAQBAJ",
    authors: ["Frank O'Hara"],
    title: "Lunch Poems",
    description: "50th anniversary hardcover gift edition of the groundbreaking poetry collection by the leader of the \"New York School\" of poetry.",
    image: "http://books.google.com/books/content?id=_OnXAwAAQBAJ&printsec=frontcover&img=1&zoom=1&edge=curl&source=gbs_api",
    link: "http://books.google.com/books?id=_OnXAwAAQBAJ&printsec=frontcover&dq=lunch+poems&hl=&cd=1&source=gbs_api",
  },

  {
    _id: "HdnWDgAAQBAJ",
    authors: ["Joseph Cassara"],
    title: "The House of Impossible Beauties",
    description: "NAMED A MOST ANTICIPATED BOOK OF 2018 BY Buzzfeed • The Wall Street Journal • The Millions • Southern Living • Bustle • Esquire • Entertainment Weekly • Nylon “Cassaras’s propulsive and profound first novel, finding one’s home in the world—particularly in a subculture plagued by fear and intolerance from society—comes with tragedy as well as extraordinary personal freedom.” -- Esquire A gritty and gorgeous debut that follows a cast of gay and transgender club kids navigating the Harlem ball scene of the 1980s and ’90s, inspired by the real House of Xtravaganza made famous by the seminal documentary Paris Is Burning It’s 1980 in New York City, and nowhere is the city’s glamour and energy better reflected than in the burgeoning Harlem ball scene, where seventeen-year-old Angel first comes into her own. Burned by her traumatic past, Angel is new to the drag world, new to ball culture, and has a yearning inside of her to help create family for those without. When she falls in love with Hector, a beautiful young man who dreams of becoming a professional dancer, the two decide to form the House of Xtravaganza, the first-ever all-Latino house in the Harlem ball circuit. But when Hector dies of AIDS-related complications, Angel must bear the responsibility of tending to their house alone. As mother of the house, Angel recruits Venus, a whip-fast trans girl who dreams of finding a rich man to take care of her; Juanito, a quiet boy who loves fabrics and design; and Daniel, a butch queen who accidentally saves Venus’s life. The Xtravaganzas must learn to navigate sex work, addiction, and persistent abuse, leaning on each other as bulwarks against a world that resists them. All are ambitious, resilient, and determined to control their own fates, even as they hurtle toward devastating consequences. Told in a voice that brims with wit, rage, tenderness, and fierce yearning, The House of Impossible Beauties is a tragic story of love, family, and the dynamism of the human spirit.",
    image: "http://books.google.com/books/content?id=HdnWDgAAQBAJ&printsec=frontcover&img=1&zoom=1&edge=curl&source=gbs_api",
    link: "http://books.google.com/books?id=HdnWDgAAQBAJ&printsec=frontcover&dq=house+of+impossible+beautiies&hl=&cd=1&source=gbs_api",
  },

  {
    _id: "UbfNDwAAQBAJ",
    authors: ["Bryan Washington"],
    title: "Memorial",
    description: "A NEW YORK TIMES NOTABLE BOOK OF THE YEAR A GOOD MORNING AMERICA BOOK CLUB PICK Named a Best Book of the Year by The Washington Post, TIME, O, the Oprah Magazine, Esquire, Harper's Bazaar, Good Housekeeping, and Real Simple “A masterpiece.” —NPR “No other novel this year captures so gracefully the full palette of America.” —The Washington Post “Wryly funny, gently devastating.” —Entertainment Weekly A funny and profound story about family in all its strange forms, joyful and hard-won vulnerability, becoming who you're supposed to be, and the limits of love. Benson and Mike are two young guys who live together in Houston. Mike is a Japanese American chef at a Mexican restaurant and Benson's a Black day care teacher, and they've been together for a few years—good years—but now they're not sure why they're still a couple. There's the sex, sure, and the meals Mike cooks for Benson, and, well, they love each other. But when Mike finds out his estranged father is dying in Osaka just as his acerbic Japanese mother, Mitsuko, arrives in Texas for a visit, Mike picks up and flies across the world to say goodbye. In Japan he undergoes an extraordinary transformation, discovering the truth about his family and his past. Back home, Mitsuko and Benson are stuck living together as unconventional roommates, an absurd domestic situation that ends up meaning more to each of them than they ever could have predicted. Without Mike's immediate pull, Benson begins to push outwards, realizing he might just know what he wants out of life and have the goods to get it. Both men will change in ways that will either make them stronger together, or fracture everything they've ever known. And just maybe they'll all be okay in the end.",
    image: "http://books.google.com/books/content?id=UbfNDwAAQBAJ&printsec=frontcover&img=1&zoom=1&edge=curl&source=gbs_api",
    link: "http://books.google.com/books?id=UbfNDwAAQBAJ&printsec=frontcover&dq=memorial+bryan&hl=&cd=1&source=gbs_api",
  },

  {
    _id: "t7ifDwAAQBAJ",
    authors: ["Carmen Maria Machado"],
    title: "In the Dream House",
    description: "A revolutionary memoir about domestic abuse by the award-winning author of Her Body and Other Parties In the Dream House is Carmen Maria Machado’s engrossing and wildly innovative account of a relationship gone bad, and a bold dissection of the mechanisms and cultural representations of psychological abuse. Tracing the full arc of a harrowing relationship with a charismatic but volatile woman, Machado struggles to make sense of how what happened to her shaped the person she was becoming. And it’s that struggle that gives the book its original structure: each chapter is driven by its own narrative trope—the haunted house, erotica, the bildungsroman—through which Machado holds the events up to the light and examines them from different angles. She looks back at her religious adolescence, unpacks the stereotype of lesbian relationships as safe and utopian, and widens the view with essayistic explorations of the history and reality of abuse in queer relationships. Machado’s dire narrative is leavened with her characteristic wit, playfulness, and openness to inquiry. She casts a critical eye over legal proceedings, fairy tales, Star Trek, and Disney villains, as well as iconic works of film and fiction. The result is a wrenching, riveting book that explodes our ideas about what a memoir can do and be.",
    image: "http://books.google.com/books/content?id=t7ifDwAAQBAJ&printsec=frontcover&img=1&zoom=1&edge=curl&source=gbs_api",
    link: "http://books.google.com/books?id=t7ifDwAAQBAJ&printsec=frontcover&dq=in+the+dream+house&hl=&cd=1&source=gbs_api",
  }

];

db.Book
  .remove({})
  .then(() => db.Book.collection.insertMany(bookSeed))
  .then(data => {
    console.log(data.result.n + " records inserted!");
    process.exit(0);
  })
  .catch(err => {
    console.error(err);
    process.exit(1);
  });