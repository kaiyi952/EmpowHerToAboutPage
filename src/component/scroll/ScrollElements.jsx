import React from 'react';
import { Controller, Scene } from 'react-scrollmagic';
import { Tween } from 'react-gsap';
import './scroll.css';

const ScrollElements = () => (
  <div className="flex justify-between">
    <div className="w-2/3">
      <Controller>
        <Scene duration={200} triggerHook={0.8} pin offset={300}>
          {(progress) => (
            <div className="sticky p-4 rounded-lg text-primary">
              <Tween
                to={{ scale: 1.5, opacity: 1, x: 270 }}
                from={{ scale: 1, opacity: 0.2 }}
                ease="power1.inOut"
                totalProgress={progress}
                paused
              >
                <div className="scrollTitle">Mission</div>
              </Tween>
              <div className="scrollText">
                We enable young (minority) girls to believe in themselves by
                providing them with tools to thrive in life so that they can
                break systemic barriers and traditional beliefs in their
                communities.
              </div>
            </div>
          )}
        </Scene>

        <Scene duration={200} triggerHook={0.8} pin offset={300}>
          {(progress) => (
            <div className="sticky top-0 p-4 rounded-lg">
              <Tween
                to={{ scale: 1.5, opacity: 1, x: 270 }}
                from={{ scale: 1, opacity: 0.2 }}
                ease="power1.inOut"
                totalProgress={progress}
                paused
              >
                <div className="scrollTitle">Vision</div>
              </Tween>
              <div className="scrollText">
                EmpowHERing young Queens to slay! (Or as the parents would say):
                EmpowHER young women to shatter systemic barriers.
              </div>
            </div>
          )}
        </Scene>

        <Scene duration={200} triggerHook={0.8} pin offset={300}>
          {(progress) => (
            <div className="sticky top-0 p-4 rounded-lg">
              <Tween
                to={{ scale: 1.5, opacity: 1, x: 270 }}
                from={{ scale: 1, opacity: 0.2 }}
                ease="power1.inOut"
                totalProgress={progress}
                paused
              >
                <div className="scrollTitle">Values</div>
              </Tween>
              <div className="scrollText">
                Leadership & Entrepreneurship, Financial Independence,
                Mentorship, Wellness, Community Advocacy
              </div>
            </div>
          )}
        </Scene>

        <Scene duration={200} triggerHook={0.8} pin ffset={300}>
          {(progress) => (
            <div className="sticky top-0 p-4 rounded-lg">
              <Tween
                to={{ scale: 1.5, opacity: 1, x: 270 }}
                from={{ scale: 1, opacity: 0.2 }}
                ease="power1.inOut"
                totalProgress={progress}
                paused
              >
                <div className="scrollTitle">Impact</div>
              </Tween>
              <div className="scrollText">
                Served 652 girls (53% black, 24% Latina and 23% other). Invested
                $350K in the community. 84% of the girls got a job (financial
                finesse).
              </div>
            </div>
          )}
        </Scene>
      </Controller>
    </div>
  </div>
);

export default ScrollElements;
