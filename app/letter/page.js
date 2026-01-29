"use client";

import { useState, useEffect } from "react";
import Link from "next/link";
import Image from "next/image";

export default function Letter() {
  const [opened, setOpened] = useState(false);

  // subtle ambient animation injection
  useEffect(() => {
    const style = document.createElement("style");
    style.innerHTML = `
      @keyframes floatDust {
        from { transform: translateY(10px); opacity: 0; }
        to { transform: translateY(-80px); opacity: 0.3; }
      }
    `;
    document.head.appendChild(style);
  }, []);

  return (
    <main className="page">
      {/* floating paper dust */}
      <div className="dust">
        {[...Array(12)].map((_, i) => (
          <span key={i} style={{ left: `${i * 8}%`, animationDelay: `${i * 1.4}s` }} />
        ))}
      </div>

      <div
        className={`card ${opened ? "open" : ""}`}
        onClick={() => !opened && setOpened(true)}
      >
        {/* FRONT */}
        {!opened && (
          <>
            <div className="ribbon" />
            <div className="wax" />
            <p className="sealText">Open me slowly</p>
          </>
        )}

        {/* INSIDE */}
        {opened && (
          <div className="inside">
            <Image
              src="/images/memories/memory-01.png"
              alt=""
              width={280}
              height={360}
              priority
              className="photo"
            />

            <p className="letter">
              Hi sneha garg how are you wow happy 100 days actually 101 but hey I love you sos os solo so much my life genuiebeky has changed so much ever Ince that faithful call in June with shambhavi and maahir and I dont even know how many people okay so bhai I love you sos os os o much genuinely sometimes I can act like a kid but thats who I am lol I know me acting like a kid has costed you a lot but still 
                thank you sneha for sticking with me through everything. Yes, we have our ups, and downs I know but at the end of the day it’s always us against the world. I love you so much sneha garg bhai aise when we started dating Haina bhai u won’t believe how obsesses I was with you bhai matlab aise bhai kisi bhi ladki ki story khulti thi bha aise alag thoughts phele shuru hojate the mere dimag me ki meri sneha zada sundar hai and all lol bhai I’ve cared for 
         you since day 1 day goddam 1 bhai I dont aise kya feel hua mereko bhai I see everything in you bhai are I know we’re young and all that but bhai aise I genuinely hope that we have a future together I will figkt my level best to make sure that happens but if we dont know that a small or well a considerably good amount of me would always and always love you, and ill be here cause I dont want things to change, and ill pray that things stay the same alwasy. Bhai oh my god look at me plugging song references
                look at the man you’ve made sneha garg. I know I have said it before as well but bhai you’re insecurities are my insecurities, you’re problems are my problem you’re tears are my tears I know its said that one can never truly understand what you’re feeling no one can but trust me I always try and I do understand sometimes I dont but I always try and I alcays will bhai aise
                  sometimes in fights I say things rude things but well its okay its not but aise we have something to look back to haina bhai aise a relationship without fights isn’t a real relationship. A genuine, and true relationship is full of jealousy, insecurity(in a good manner not that not fucking having guy friends wali insecurity), possessiveness, care, and a lot of things which my dumbass isn’t able to recall right now but anyways. Sneha, my love I do get jealous, trust me there’s not a person who has or ever will be as jealous as me when it comes to you. I’ve always wanted my person, and now I 
                    have that person it’s you, my love. Yes, I do get jealous when you talk to someone that isn’t me, yes, I do get jealous when you mention someone else, yes, I do get jealous when I dont know something about your day, yes, I do get jealous of that bracelet on your hand cause it gets to feel your delicateness, and warmth, yes, I do get jealous of that black hnm hoodie of mine cause you cry into it. Yes, I do get jealous of that soft toy I gave you, cause u cuddle with it everyday. Yes, I do get jealous when you tell me old stories(even though I know you treat me better but I am so fucking possessive about you), 
                      yes, I do get jealous of your speaker cause it gets to sing to you while you bath, yes, I do get jealous of your books and study material cause you spend time with them. I get jealous of everything yes, I dont act on my jealousy because my love you also deserve a life outside of me. I love seeing you happy, seeing you happy genuinely makes my day. I realised, that if you were to ask me what I really want in life I’d probably reply with seeing sneha garg make it big in life, and achieve all of her dreams. Because if you make it big, I’ll automatically makre it big as well, and vice versa. I truly believe we were bound to meet bhai 
                      in the USA its aise ki the president is judged by the first 100 days of his presidency Haina toh aise bhai if I were to judge our first 100 days id say a lot of things but 1 thing is thats they’ve by far been the most happiest 100 days, but actually my life’s secretly been way better than 27th June. Now, you might now consider our thing from 27th June but I always will bhai somehow you’ve always been on the more important side of things ever since that start maybe I used all those nazar emojis ironically and prayed to god ironically(or who knowa) before texting you but aise bhai I’ve always said na ki mereko farak nahi padhta tha but well confession time I’ve always cared. 
                      Since day fucking 1 sneha garg. Yes, there’ve been a lot of people before you and kaafi cheezo se maybe aise cheeze dimag me aye yaad aye and all that but ahai ill alcays choose you no matter what because you’re the one person who truly showed me light. Bhai everything is so much better with you bhai sneha im sorry for everything I’ve done aise galat galat but bhai ill necer stop loving you im not capable of that, and aise ek sach baat batau aise bhai I think you’re far more smarter than me and this is coming directly from the heart sneha, bhai aise I’ve never accepted this about any girl before you but bhai you’re genuinely smarter than me more emotionally understanding, more Human, you keep me grounded, 
                      I just once want to talk about everything, all the things we have discussed to talk after boards and jee and unke alawa bhi I just dont want ki they go incomplete and we part ways please dont leave, and let me leave. No matter what happens just dont leave, and let me leave. Also one thing bhai ever since Noir im scared of using the nazar wala emoji cause nise I used It too much for noir and it didn’t end up working out so, thats why I’ve never khudse used the nazar wala emoji ek baar bhi yes im the most superstitious person alive lol. I used to touch aise every Diwali wale feet jo zameen OH WOW OH WOW YES SO SNEHA AISE BHAI LAXMI MATA KE FEET LAGTE HAI NA ZAAMEEN PAR AISE dewli time par bhai I dont know how many times I’ve touched those feet for 2 years regularly
                      I used to touch them when I left the house came into the house or whenever I saw them kahi par bhi bhai I used to think ocd and all but now I realise they were my secret prayers for you kyuki aise we started dating on Diwali Haifa bhai genuinely made for eakch other okay and one more thing bhai ais have you noticed ki whenever I talk about the future or aise in general I always misspell the words its because aise I feel ki if whcecer i. Say majkes sense it  won’t happen so its basically  a silenk prayer ki that thing happens aise ki good things you know kyuki ocd me aisa feel hota tha mereko. I want to touch your feet and get your blessings. I love getting to know you and understanding you, I just want to understand your perspective on everything what you think, what you feel, I want to know you in ways no one has ever dared. I wish to be your comfort person forever, 
                        I wish to be the one person you have in your life till u die, and even after that. Sneha garg you mean so so so sos much to me I can keep on writing forever I dont know my love you’re so gorgeous, so pulchritudinooues, so emhemeral, so califragilisticexpalicaxious so everything you’re my everything I want to discuss everything with you I wanna bitch about everyonewith you I wanna everything with you I wanna travel I wanan disappear with you If I ever dissapear I hope its with you If I ever wanna be mysterious I dont want it to be the same for you I always want to be this child for you because you satisydy and heal my inner child not that I have some crazy trauma but you provide an insane amount of warmth to it I always wanna be a kid in front of you bhai I m not like this with anyone tine nakhre itna udaas angry sure woh toh haan but aise itna jitna blunt about my feelings im in front of u cause I know ull alcays validate them. 
                        I also believe ki every song is our song no matter kis ki was se sunan ho or what so what its the past koi aata hai dimag me aane do cause my heart only has spkace for you and no one else(kyuki itne mote jo ho(im sorry that was an attempt at being funny sorry love)). I love when you get jealous, possessive, insecure jaan I love I’ve always wanted a person who wants me all to themselves and trust me I love all of it I love it I will necer be as close to anyone as Im w u. You genuinely dont understand how much I love you. You mean everything to me you’re my goddess I love you. Aise bhai ab geniely me padhna  hai theekhai bhot hogayi hum dono ki ye rone dhona hum karte rhaneke theekhai I love you, and i love ho wyou care  about me i love whatever u fele expericne and do anyeays i ll necer judge u and yeah fuck ur ex lol i love u haoy 100 days 
            </p>

            <Link href="/memories" className="continue">
              Continue →
            </Link>
          </div>
        )}
      </div>

      {/* styles */}
      <style jsx>{`
        .page {
          min-height: 100vh;
          display: flex;
          align-items: center;
          justify-content: center;
          background:
            radial-gradient(circle at top, #f7efe6 0%, #efe6db 45%, #e6dccf 100%);
          perspective: 1400px;
          overflow: hidden;
        }

        /* floating paper dust */
        .dust {
          position: fixed;
          inset: 0;
          pointer-events: none;
          z-index: 0;
        }

        .dust span {
          position: absolute;
          bottom: -20px;
          width: 6px;
          height: 6px;
          background: rgba(255,255,255,0.6);
          border-radius: 50%;
          animation: floatDust 14s linear infinite;
        }

        /* card */
        .card {
          width: min(380px, 85vw);
          height: 520px;
          background: linear-gradient(180deg, #fbfaf8, #f3eee7);
          border-radius: 20px;
          box-shadow: 0 40px 90px rgba(0,0,0,0.22);
          position: relative;
          cursor: pointer;
          transform-style: preserve-3d;
          transition: transform 1.6s cubic-bezier(.25,.8,.25,1);
          display: flex;
          align-items: center;
          justify-content: center;
          z-index: 1;
        }

        .card.open {
          transform: rotateX(180deg);
        }

        /* ribbon */
        .ribbon {
          position: absolute;
          width: 100%;
          height: 26px;
          background:
            linear-gradient(
              90deg,
              #cfa8b8,
              #f3ccd8,
              #cfa8b8
            );
          top: 50%;
          transform: translateY(-50%);
          box-shadow: 0 12px 24px rgba(0,0,0,0.2);
        }

        /* wax seal */
        .wax {
          position: absolute;
          bottom: 56px;
          width: 60px;
          height: 60px;
          background:
            radial-gradient(circle at top left, #e07a8d, #b14f63);
          border-radius: 50%;
          box-shadow:
            inset 0 4px 6px rgba(255,255,255,0.3),
            inset 0 -6px 10px rgba(0,0,0,0.35),
            0 10px 20px rgba(0,0,0,0.25);
        }

        .sealText {
          position: absolute;
          bottom: 26px;
          font-size: 12px;
          letter-spacing: 4px;
          opacity: 0.55;
          text-transform: uppercase;
        }

        /* inside */
        .inside {
          position: absolute;
          inset: 0;
          padding: 36px;
          display: flex;
          flex-direction: column;
          align-items: center;
          justify-content: center;
          transform: rotateX(180deg);
          backface-visibility: hidden;
          text-align: center;
        }

        .photo {
          border-radius: 14px;
          margin-bottom: 28px;
          object-fit: cover;
          box-shadow: 0 20px 40px rgba(0,0,0,0.25);
        }

        .letter {
          line-height: 1.65;
          opacity: 0.75;
          margin-bottom: 36px;
          font-size: 15px;
        }

        .continue {
          text-decoration: none;
          font-size: 13px;
          letter-spacing: 0.22em;
          text-transform: uppercase;
          opacity: 0.55;
          transition: opacity 0.3s ease, transform 0.3s ease;
        }

        .continue:hover {
          opacity: 0.9;
          transform: translateY(-2px);
        }
      `}</style>
    </main>
  );
}
