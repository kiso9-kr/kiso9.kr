---
title: "sample_pack"
date: 2026-03-15
type: "strudel"
section: "live-coding"
thumbnail: "/live_coding/sample_pack/sample_pack.jpg"
code: |
  $kick:stack(
    sound("bd:1*4").gain(1.2).cutoff(1500), //정박
    sound("~ bd:2 ~ [~ bd:2]").hpf(100), //낮은애들 제외
    sound("bd:0(11,16)").gain(sine.range(0.1,0.4).slow(2)).lpf(200)
  )._scope() // 유클리드리듬. 16박자에 11개 소리 배치. 사인파를 그리며 천천히 오감. 커졋다작아졋다하는 움직임. 

  $HH: sound("ace_hh*16").gain(0.1)

  $Perc: stack(
    sound("ace_perc") // 질감중심 퍼커션
      .struct("1 0 [~ 1 ~ 1] 0")
      .gain(0.3)
      .shape(0.5).lpf(800) //쉐잎을 왜곡시켜 배음으로 꽉 차게 하고 날카로운고역대 깎아서 좀 따뜻하게. 중저음대가 꽉찬 묵직하고 따뜻한질감
      .delay(0.25).delayfeedback(0.1), //소리의 0.25퍼센트(양) 딜레이. 그리고 딜레이피드백이 딜레이 시간. 그게 0.1의 크기로 입력이 들어감.
    sound("viscospacedrum_perc") // 질감보강
      .struct("1 0 [~ 1 ~ 1] 0")
      .gain(0.2),
    sound("system100_perc:3")
      .struct("0 0 [~ 1] 0")
      .gain(0.3),
  )

  $Snare: stack(
    sound("system100_sd:3")
      .struct("0 1 0 1")
      .gain(sine.range(0.2,0.5).slow(2)),
  )

  $bass: s("sine")
      .struct("1 [~ 1] 1 [~ 1]")
      .decay(0.1).sustain(0.7).release(0.5)

  $Pad1: s("gm_fx_echoes")
      .attack(2)
      .release(3)
      .lpf(800)
      .vibrato(4, 0.15)
      .delay(0.02).delayfeedback(0.3)
      .gain(0.3)
---

SCR Radio &lt;Community Chest&gt;를 위해 제작한 2마디 가량의 루프입니다.

A 2-bar loop produced for the SCR Radio sample pack event &lt;Community Chest&gt;.
