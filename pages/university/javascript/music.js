//Button
  function myFunction()
  {
  document.getElementById("musicplayer").classList.toggle("show");
  }

//Player
  new Vue({
    el: ".music-content",
    data() {
      return {
        audio: null,
        circleLeft: null,
        barWidth: null,
        duration: null,
        currentTime: null,
        isTimerPlaying: false,
        tracks: [
          {
            name: "Cavetown",
            artist: "Lemon Boy",
            cover: "multimedia/lemon-boy/lemon-boy.jpeg",
            source: "multimedia/lemon-boy/lemon-boy.mp3",
          },
          {
            name: "Cavetown",
            artist: "Green",
            cover: "multimedia/lemon-boy/lemon-boy.jpeg",
            source: "multimedia/lemon-boy/green.mp3",
          }, 
          {
            name: "Cavetown",
            artist: "It's U",
            cover: "multimedia/lemon-boy/lemon-boy.jpeg",
            source: "multimedia/lemon-boy/it's-u.mp3",
          },
          {
            name: "Cavetown",
            artist: "Fool",
            cover: "multimedia/lemon-boy/lemon-boy.jpeg",
            source: "multimedia/lemon-boy/fool.mp3",
          },
          {
            name: "Cavetown",
            artist: "Another One of Those Days",
            cover: "multimedia/lemon-boy/lemon-boy.jpeg",
            source: "multimedia/lemon-boy/another-one-of-those-days.mp3",
          },
          {
            name: "Cavetown",
            artist: "Taking Care of Things",
            cover: "multimedia/lemon-boy/lemon-boy.jpeg",
            source: "multimedia/lemon-boy/taking-care-of-things.mp3",
          },
          {
            name: "Cavetown",
            artist: "Big Bowl in the Sky",
            cover: "multimedia/lemon-boy/lemon-boy.jpeg",
            source: "multimedia/lemon-boy/big-bowl-in-the-sky.mp3",
          },
          {
            name: "Cavetown",
            artist: "888",
            cover: "multimedia/lemon-boy/lemon-boy.jpeg",
            source: "multimedia/lemon-boy/888.mp3",
          },
          {
            name: "Cavetown",
            artist: "Poison",
            cover: "multimedia/lemon-boy/lemon-boy.jpeg",
            source: "multimedia/lemon-boy/poison.mp3",
          },
          {
            name: "Cavetown",
            artist: "10 Feet Tall",
            cover: "multimedia/lemon-boy/lemon-boy.jpeg",
            source: "multimedia/lemon-boy/10-feet-tall.mp3",
          },
          {
            name: "Cavetown",
            artist: "I'll Make Cereal",
            cover: "multimedia/lemon-boy/lemon-boy.jpeg",
            source: "multimedia/lemon-boy/ill-make-cereal.mp3",
          },
          {
            name: "Cavetown",
            artist: "Pigeon",
            cover: "multimedia/lemon-boy/lemon-boy.jpeg",
            source: "multimedia/lemon-boy/pigeon.mp3",
          },
          {
            name: "Cavetown",
            artist: "Lemon Boy - Acapella Version",
            cover: "multimedia/lemon-boy/lemon-boy.jpeg",
            source: "multimedia/lemon-boy/lemon-boy-acapella.mp3",
          },

          {
            name: "Chloe Moriondo",
            artist: "Waves",
            cover: "multimedia/rabbit-hearted/rabbit-hearted.jpeg",
            source: "multimedia/rabbit-hearted/waves.mp3",
          },
          {
            name: "Chloe Moriondo",
            artist: "Stagnant",
            cover: "multimedia/rabbit-hearted/rabbit-hearted.jpeg",
            source: "multimedia/rabbit-hearted/stagnant.mp3",
          },
          {
            name: "Chloe Moriondo",
            artist: "Spaceland",
            cover: "multimedia/rabbit-hearted/rabbit-hearted.jpeg",
            source: "multimedia/rabbit-hearted/spaceland.mp3",
          },
          {
            name: "Chloe Moriondo",
            artist: "Small",
            cover: "multimedia/rabbit-hearted/rabbit-hearted.jpeg",
            source: "multimedia/rabbit-hearted/small.mp3",
          },
          {
            name: "Chloe Moriondo",
            artist: "Luv Note",
            cover: "multimedia/rabbit-hearted/rabbit-hearted.jpeg",
            source: "multimedia/rabbit-hearted/luv-note.mp3",
          },
          {
            name: "Chloe Moriondo",
            artist: "Silly Girl",
            cover: "multimedia/rabbit-hearted/rabbit-hearted.jpeg",
            source: "multimedia/rabbit-hearted/silly-girl.mp3",
          },
          {
            name: "Chloe Moriondo",
            artist: "Road Trip",
            cover: "multimedia/rabbit-hearted/rabbit-hearted.jpeg",
            source: "multimedia/rabbit-hearted/road-trip.mp3",
          },
          {
            name: "Chloe Moriondo",
            artist: "Exhausted",
            cover: "multimedia/rabbit-hearted/rabbit-hearted.jpeg",
            source: "multimedia/rabbit-hearted/exhausted.mp3",
          },
          {
            name: "Chloe Moriondo",
            artist: "Little Moth",
            cover: "multimedia/rabbit-hearted/rabbit-hearted.jpeg",
            source: "multimedia/rabbit-hearted/little-moth.mp3",
          },
          {
            name: "Chloe Moriondo",
            artist: "Dream About U",
            cover: "multimedia/rabbit-hearted/rabbit-hearted.jpeg",
            source: "multimedia/rabbit-hearted/dream-about-u.mp3",
          },
          {
            name: "Chloe Moriondo",
            artist: "Ghost Adventure Spirit Orb",
            cover: "multimedia/spirit-orbit/spirit-orbit.jpeg",
            source: "multimedia/spirit-orbit/ghost-adventure-spirit-orb.mp3",
          },
          {
            name: "Chloe Moriondo",
            artist: "Kindergarten",
            cover: "multimedia/spirit-orbit/spirit-orbit.jpeg",
            source: "multimedia/spirit-orbit/kindergarten.mp3",
          },
          {
            name: "Chloe Moriondo",
            artist: "Bugbear",
            cover: "multimedia/spirit-orbit/spirit-orbit.jpeg",
            source: "multimedia/spirit-orbit/bugbear.mp3",
          },
          {
            name: "Chloe Moriondo",
            artist: "Far Away Friend",
            cover: "multimedia/spirit-orbit/spirit-orbit.jpeg",
            source: "multimedia/spirit-orbit/far-away-friend.mp3",
          },
          {
            name: "CASTLEBEAT",
            artist: "Into",
            cover: "multimedia/extras/castlebeat.jpeg",
            source: "multimedia/extras/into.mp3",
          },
          {
            name: "Strawberry Guy",
            artist: "Sun Outside My Window",
            cover: "multimedia/extras/strawberry-guy.jpeg",
            source: "multimedia/extras/sun-outside-my-window.mp3",
          },
          {
            name: "Eyedress, Bee Eyes",
            artist: "Midnight on a Sunny Day",
            cover: "multimedia/extras/eyedress-bee-eyes.jpeg",
            source: "multimedia/extras/midnight-on-a-sunny-day.mp3",
          },
          {
            name: "Chloe Moriondo",
            artist: "I Want To Be With You",
            cover: "multimedia/extras/chloe-moriondo.jpeg",
            source: "multimedia/extras/i-want-to-be-with-you.mp3",
          },
          {
            name: "Rainbow Frog Biscuits",
            artist: "Attention",
            cover: "multimedia/extras/rainbow-frog-biscuits.jpeg",
            source: "multimedia/extras/attention.mp3",
          },
          {
            name: "Sarcastic Sounds",
            artist: "Say Goodbye",
            cover: "multimedia/extras/sarcastic-sounds.jpeg",
            source: "multimedia/extras/say-goodbye.mp3",
          },
          {
            name: "Carter Reeves",
            artist: "Tell Me, Laurel",
            cover: "multimedia/extras/carter-reeves.jpeg",
            source: "multimedia/extras/tell-me-laurel.mp3",
          },
          {
            name: "Modern Baseball",
            artist: "Intersection",
            cover: "multimedia/extras/modern-baseball.jpeg",
            source: "multimedia/extras/intersection.mp3",
          },
          {
            name: "Matt Maltese",
            artist: "Madhouse",
            cover: "multimedia/extras/matt-maltese.jpeg",
            source: "multimedia/extras/madhouse.mp3",
          },
          {
            name: "Sjowgren",
            artist: "Human Condition",
            cover: "multimedia/extras/sjowgren.jpeg",
            source: "multimedia/extras/human-condition.mp3",
          },
          {
            name: "A-Wall",
            artist: "Loverboy",
            cover: "multimedia/extras/a-wall.jpeg",
            source: "multimedia/extras/loverboy.mp3",
          },
          {
            name: "Blackaby",
            artist: "Semolina",
            cover: "multimedia/extras/blackaby.jpeg",
            source: "multimedia/extras/semolina.mp3",
          },
          {
            name: "Clairo",
            artist: "Sofia",
            cover: "multimedia/extras/clairo.jpeg",
            source: "multimedia/extras/sofia.mp3",
          },
          {
            name: "Terror Firma",
            artist: "Erasure (Talking Drums)",
            cover: "multimedia/extras/terror-firma.jpeg",
            source: "multimedia/extras/erasure-talking-drums.mp3",
          },
          {
            name: "Pizzagirl",
            artist: "By The Way",
            cover: "multimedia/extras/pizzagirl.jpeg",
            source: "multimedia/extras/by-the-way.mp3",
          },
          {
            name: "Zeph",
            artist: "Ways To Go",
            cover: "multimedia/extras/zeph.jpeg",
            source: "multimedia/extras/ways-to-go.mp3",
          },
          {
            name: "3k9x",
            artist: "My Memory of You",
            cover: "multimedia/extras/3k9x.jpeg",
            source: "multimedia/extras/my-memory-of-you.mp3",
          },
          {
            name: "Bb Sway",
            artist: "Bet You Know",
            cover: "multimedia/extras/bb-sway.jpeg",
            source: "multimedia/extras/bet-you-know.mp3",
          },
          {
            name: "Pizzagirl",
            artist: "Sugar Ray",
            cover: "multimedia/extras/pizzagirl.jpeg",
            source: "multimedia/extras/sugar-ray.mp3",
          },
        ],
        currentTrack: null,
        currentTrackIndex: 0,
        transitionName: null
      };
    },
    methods: {
      play() {
        if (this.audio.paused) {
          this.audio.play();
          this.isTimerPlaying = true;
        } else {
          this.audio.pause();
          this.isTimerPlaying = false;
        }
      },
      generateTime() {
        let width = (100 / this.audio.duration) * this.audio.currentTime;
        this.barWidth = width + "%";
        this.circleLeft = width + "%";
        let durmin = Math.floor(this.audio.duration / 60);
        let dursec = Math.floor(this.audio.duration - durmin * 60);
        let curmin = Math.floor(this.audio.currentTime / 60);
        let cursec = Math.floor(this.audio.currentTime - curmin * 60);
        if (durmin < 10) {
          durmin = "0" + durmin;
        }
        if (dursec < 10) {
          dursec = "0" + dursec;
        }
        if (curmin < 10) {
          curmin = "0" + curmin;
        }
        if (cursec < 10) {
          cursec = "0" + cursec;
        }
        this.duration = durmin + ":" + dursec;
        this.currentTime = curmin + ":" + cursec;
      },
      updateBar(x) {
        let progress = this.$refs.progress;
        let maxduration = this.audio.duration;
        let position = x - progress.offsetLeft;
        let percentage = (100 * position) / progress.offsetWidth;
        if (percentage > 100) {
          percentage = 100;
        }
        if (percentage < 0) {
          percentage = 0;
        }
        this.barWidth = percentage + "%";
        this.circleLeft = percentage + "%";
        this.audio.currentTime = (maxduration * percentage) / 100;
        this.audio.play();
      },
      clickProgress(e) {
        this.isTimerPlaying = true;
        this.audio.pause();
        this.updateBar(e.pageX);
      },
      prevTrack() {
        this.transitionName = "scale-in";
        this.isShowCover = false;
        if (this.currentTrackIndex > 0) {
          this.currentTrackIndex--;
        } else {
          this.currentTrackIndex = this.tracks.length - 1;
        }
        this.currentTrack = this.tracks[this.currentTrackIndex];
        this.resetPlayer();
      },
      nextTrack() {
        this.transitionName = "scale-out";
        this.isShowCover = false;
        if (this.currentTrackIndex < this.tracks.length - 1) {
          this.currentTrackIndex++;
        } else {
          this.currentTrackIndex = 0;
        }
        this.currentTrack = this.tracks[this.currentTrackIndex];
        this.resetPlayer();
      },
      resetPlayer() {
        this.barWidth = 0;
        this.circleLeft = 0;
        this.audio.currentTime = 0;
        this.audio.src = this.currentTrack.source;
        setTimeout(() => {
          if(this.isTimerPlaying) {
            this.audio.play();
          } else {
            this.audio.pause();
          }
        }, 300);
      },
      favorite() {
        this.tracks[this.currentTrackIndex].favorited = !this.tracks[
          this.currentTrackIndex
        ].favorited;
      }
    },
    created() {
      let vm = this;
      this.currentTrack = this.tracks[0];
      this.audio = new Audio();
      this.audio.src = this.currentTrack.source;
      this.audio.ontimeupdate = function() {
        vm.generateTime();
      };
      this.audio.onloadedmetadata = function() {
        vm.generateTime();
      };
      this.audio.onended = function() {
        vm.nextTrack();
        this.isTimerPlaying = true;
      };

      // this is optional (for preload covers)
      for (let index = 0; index < this.tracks.length; index++) {
        const element = this.tracks[index];
        let link = document.createElement('link');
        link.rel = "prefetch";
        link.href = element.cover;
        link.as = "image"
        document.head.appendChild(link)
      }
    }
  });
