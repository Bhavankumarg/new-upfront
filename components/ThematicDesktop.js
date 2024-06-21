import React from 'react'
import HealthWellbeing from './health&wellbeing'
import GenderEquality from "@components/GenderEquality";
import AgencyBuilding from "@components/AgencyBuilding";
import Financial from "@components/Financial&DigitalInclusion";
import Workplace from "@components/Workplace";
import SocialProtection from "@components/SocialProtection";
const ThematicDesktop = () => {
  return (
    <>
    <div  className="mt-10 px-10 hidden lg:block">
        <p className="text-center text-6xl pb-10 text-[#222222]">THEMATIC AREAS</p>
        <div>
          <div className="border-0 border-gray-200 dark:border-gray-700">
            <ul
              className="flex flex-wrap -mb-px text-md font-medium text-center ms-3 container w-screen mt-4"
              id="default-tab"
              data-tabs-toggle="#default-tab-content"
              role="tablist"
            >
              <li className="me-2 flex-1 mr-2" role="presentation" id="talkbubble">
                <button
                  className="inline-block p-3 text-customBlack"
                  id="profile-tab"
                  data-tabs-target="#profile"
                  type="button"
                  role="tab"
                  aria-controls="profile"
                  aria-selected="false"
                >
                  Health & <br />Wellbeing
                </button>
              </li>
              <li className="me-2 flex-1 mr-2" role="presentation" id="talkbubble">
                <button
                  className="inline-block p-3 text-customblack"
                  id="genter_equality-tab"
                  data-tabs-target="#genter_equality"
                  type="button"
                  role="tab"
                  aria-controls="genter_equality"
                  aria-selected="false"
                >
                  Gender Equality,<br /> Inclusion, and Diversity
                </button>
              </li>
              <li className="me-2 flex-1 mr-2" role="presentation" id="talkbubble">
                <button
                  className="inline-block p-3 text-customBlack"
                  id="settings-tab"
                  data-tabs-target="#settings"
                  type="button"
                  role="tab"
                  aria-controls="settings"
                  aria-selected="false"
                >
                  Agency Building for<br /> Women & Young Girls
                </button>
              </li>
              <li role="presentation" className="flex-1 mr-2" id="talkbubble">
                <button
                  className="inline-block p-3 text-customBlack"
                  id="contacts-tab"
                  data-tabs-target="#contacts"
                  type="button"
                  role="tab"
                  aria-controls="contacts"
                  aria-selected="false"
                >
                  Financial & <br />Digital Inclusion
                </button>
              </li>
              <li className="me-2 flex-1 mr-2" role="presentation" id="talkbubble">
                <button
                  className="inline-block p-3 text-customBlack"
                  id="workplace-tab"
                  data-tabs-target="#workplace"
                  type="button"
                  role="tab"
                  aria-controls="workplace"
                  aria-selected="false"
                >
                  Workplace/<br /> Social Dialogues
                </button>
              </li>
              <li className="me-2 flex-1 mr-2" role="presentation" id="talkbubble">
                <button
                  className="inline-block p-3 text-customBlack"
                  id="social_protection-tab"
                  data-tabs-target="#social_protection"
                  type="button"
                  role="tab"
                  aria-controls="social_protection"
                  aria-selected="false"
                >
                  Social<br /> Protection
                </button>
              </li>
            </ul>
          </div>

          <div id="default-tab-content">
            <div
              className="hidden p-4 rounded-lg relative mt-28"
              id="profile"
              role="tabpanel"
              aria-labelledby="profile-tab"
            >
              <HealthWellbeing />
            </div>

            <div
              className="hidden p-4 rounded-lg relative mt-28"
              id="genter_equality"
              role="tabpanel"
              aria-labelledby="genter_equality-tab"
            >
              <GenderEquality />
            </div>
            <div
              className="hidden p-4 rounded-lg relative mt-28"
              id="settings"
              role="tabpanel"
              aria-labelledby="settings-tab"
            >
              <AgencyBuilding />
            </div>

            <div
              className="hidden p-4 rounded-lg relative mt-28"
              id="contacts"
              role="tabpanel"
              aria-labelledby="contacts-tab"
            >
              <Financial />
            </div>

            <div
              className="hidden p-4 rounded-lg relative mt-28"
              id="workplace"
              role="tabpanel"
              aria-labelledby="workplace-tab"
            >
              <Workplace />
            </div>

            <div
              className="hidden p-4 rounded-lg relative mt-28"
              id="social_protection"
              role="tabpanel"
              aria-labelledby="social_protection-tab"
            >
              <SocialProtection />
            </div>
          </div>
        </div>
      </div>
    </>
  )
}

export default ThematicDesktop