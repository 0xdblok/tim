import React from "react";
import timbed from "../asset/timbed.png";
import timhouse from "../asset/timhouse.png";
import timfriend from "../asset/timfriend.png";
import Image from "next/image";
export default function About() {
  return (
    <div className="space-y-8 font-sans font-medium px-6 pt-40">
      <article class="relative overflow-hidden rounded-lg shadow transition hover:shadow-lg">
        <Image
          width="800"
          height="800"
          alt=""
          src={timbed}
          class="absolute inset-0 h-full w-full object-cover"
        />

        <div class="relative bg-gradient-to-t from-gray-900/50 to-gray-900/25 pt-32 sm:pt-48 lg:pt-64">
          <div class="p-4 mb-8 sm:p-6">
            <a href="#">
              <h3 class="mt-0.5 text-lg text-white">
                Tim in Bed, Playing with Smartphone
              </h3>
            </a>

            <p class=" line-clamp-6 pt-2 text-sm/relaxed text-white/95">
              As the morning sun peeks through the curtains of Tim Yakovenko's
              sleek downtown loft, he awakens with a smirk, reaching for his
              smartphone with the confidence of a seasoned trader. With a flick
              of his thumb, he scrolls through the latest crypto news, his mind
              already calculating the day's potential profits.As the morning sun
              casts its golden rays upon his loft, Tim rises from his designer
              bed with the ease of someone accustomed to success. With a smirk,
              he reaches for his smartphone, the gateway to a world of
              opportunity and intrigue. As he peruses the latest crypto news and
              market trends, his mind races with possibilities, each trade a
              calculated step towards financial freedom.
            </p>
          </div>
        </div>
      </article>
      <article class="relative overflow-hidden rounded-lg shadow transition hover:shadow-lg">
        <Image
          width="800"
          height="800"
          alt=""
          src={timhouse}
          class="absolute inset-0 h-full w-full object-cover"
        />

        <div class="relative bg-gradient-to-t from-gray-900/50 to-gray-900/25 pt-32 sm:pt-48 lg:pt-64">
          <div class="p-4 mb-8 sm:p-6">
            <a href="#">
              <h3 class="mt-0.5 text-lg text-white">
                Tim in Front of His House
              </h3>
            </a>

            <p class="line-clamp-6 pt-2  text-sm/relaxed text-white/95">
              As the morning sun peeks through the curtains of Tim Yakovenko's
              sleek downtown loft, he awakens with a smirk, reaching for his
              smartphone with the confidence of a seasoned trader. With a flick
              of his thumb, he scrolls through the latest crypto news, his mind
              already calculating the day's potential profits.
            </p>
          </div>
        </div>
      </article>
      <article class="relative overflow-hidden rounded-lg shadow transition hover:shadow-lg">
        <Image
          width="800"
          height="800"
          alt=""
          src={timfriend}
          class="absolute inset-0 h-full w-full object-cover"
        />

        <div class="relative bg-gradient-to-t from-gray-900/50 to-gray-900/25 pt-32 sm:pt-48 lg:pt-64">
          <div class="p-4 mb-8 sm:p-6">
            <a href="#">
              <h3 class="mt-0.5 text-lg text-white">Tim Frens</h3>
            </a>

            <p class="line-clamp-6 pt-2 text-sm/relaxed text-white/95">
              Tim's friend just hodled his meme coin through a 90% dip... He's
              either the next crypto genius or he's just really lazy about
              checking his portfolio
            </p>
          </div>
        </div>
      </article>
    </div>
  );
}
