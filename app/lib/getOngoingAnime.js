"use server";
import * as cheerio from "cheerio";
const OTAKU_URL = "https://otakudesu.cam/"
export const getOngoingAnime = async (page) => {
    let url = page === 1 ? `${OTAKU_URL}/ongoing-anime/` : `${OTAKU_URL}/ongoing-anime/page/${page}/`
    const data = await fetch(url);
    const res = await data.text()
    const $ = cheerio.load(res);
    const element = $(".rapi")
    let ongoing = []
    let title, thumb, total_episode, updated_on, updated_day, endpoint
  
    element.find("ul > li").each((index, el) => {
      title = $(el).find("h2").text().trim()
      thumb = $(el).find("img").attr("src")
      total_episode = $(el).find(".epz").text()
      updated_on = $(el).find(".newnime").text()
      updated_day = $(el).find(".epztipe").text()
      endpoint = $(el).find(".thumb > a").attr("href").replace(`${OTAKU_URL}/anime/`, "").replace("/", "")
  
      ongoing.push({
        title,
        thumb,
        total_episode,
        updated_on,
        updated_day,
        endpoint,
      })
    })
    return ongoing
  }
