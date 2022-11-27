import React, { useEffect } from 'react'
import MenFashion from '../../assets/menfashion.png'
import './box.css'

export const Testing = () => {
  return (
    <div>
      <h1 className="glow">Featured Mens Fashion</h1>
      <div className='fade-in-image drop-shadow-xl'>
        <img src={MenFashion} />
        <h1
          class='bg-white text-blue-900'
          style={{ width: '100%', textAlign: 'center', wordBreak: "break-word", overflowY: "auto", padding: "20px"}}
        >
          {' '}
          All products featured on Vogue are independently selected by our
          editors. However, when you buy something through our retail links, we
          may earn an affiliate commission. The most telling component of men’s
          fashion? Footwear. They represent more than just a style choice; they
          exhibit values, interests, and lifestyles. So the best wedding shoes
          for men should send a subtle fashion message aligned with what the
          groom hopes to communicate on this big day. First thing’s first: where
          is the wedding? When shopping for wedding loafers, it’s important to
          consider the context. “The shoes must match the setting,” says Daniel
          Bucheli, president of the footwear brand, Le Majordome. “How formal or
          casual will it be? Is it on a beach, in the city, or in the
          mountains?” With nearly a decade of experience helping men find the
          perfect shoe—whether it be brogues, monk straps, or loafers—Bucheli
          preaches common sense. It would be silly to wear light loafers in the
          dead of winter, just as it might look uncomfortable to wear dark
          oxfords on a sandy beach. You will never go wrong with considering
          what’s appropriate. The fun part of footwear shopping for the big day
          comes after that is defined. Like engagement rings, wedding shoes are
          deeply personal. “The groom should pick the shoes (and suit) that will
          bring the most joy, be the most comfortable, and make him feel the
          most confident,” he says. According to him, the perfect wedding shoes
          are a marriage between the setting and the groom’s personality. “One
          should also not sacrifice comfort since it’s a day he’s likely to be
          spending a lot of time on his feet, hopefully dancing the night away.”
          Over the last two years, we’ve seen curve women such as Ashley Graham,
          Precious Lee and Alva Claire walk for luxury labels including Versace,
          Fendi, and Michael Kors. But, where are the curve men? Only seven out
          of 77 brands across the fall 2022 menswear season featured plus-size
          men’s models, according to our analysis of collections featured on
          Vogue Runway. None of the seven brands were a major fashion house,
          rather emerging names Kidsuper, Études, Casablanca, Magliano, Kiko
          Kostadinov, Maison Mihara Yasuhiro, and Doublet. IMG Models president
          Ivan Bart, who incorporated curve girls into his main women’s division
          in 2014, thinks the success stories for women should set an example
          for size inclusivity across genders. “I would like to see this in the
          men's business now,” he says. “It’s time. I want to see the same kind
          of change.”
        </h1>
        <br></br>
      </div>
    </div>
  )
}
