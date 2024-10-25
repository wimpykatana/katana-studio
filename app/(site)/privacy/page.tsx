"use client";
import { motion } from "framer-motion";
import Link from "next/link";
import React from "react";

const PrivacyPage = () => {
  const [hasMounted, setHasMounted] = React.useState(false);
  React.useEffect(() => {
    setHasMounted(true);
  }, []);
  if (!hasMounted) {
    return null;
  }
  return (
    <div className="pb-20 pt-30">
      <section id="support" className="px-4 md:px-8 2xl:px-0">
        <div className="relative mx-auto max-w-c-1390 px-7.5 pt-5 lg:px-15 xl:px-20">
          <motion.div
            variants={{
              hidden: {
                opacity: 0,
                y: -20,
              },

              visible: {
                opacity: 1,
                y: 0,
              },
            }}
            initial="hidden"
            whileInView="visible"
            transition={{ duration: 1, delay: 0.1 }}
            viewport={{ once: true }}
            className="animate_top w-full rounded-lg bg-white p-7.5 shadow-solid-8 dark:border dark:border-strokedark dark:bg-black md:w-3/5 lg:w-3/4 xl:p-15"
          >
            <h2 className="mb-4 text-3xl font-bold text-black dark:text-white">
              Privacy and Policy
            </h2>
            <p>
              This Privacy Policy governs the manner in which Katana Studio
              collects, uses, maintains and discloses information collected from
              users (each, a “User”) of the http://katanastudio.net/ website
              (“Site”). This privacy policy applies to the Site and all products
              and services offered by Katana Studio.
            </p>

            <h2 className="mb-4 mt-8 text-3xl font-bold text-black dark:text-white">
              What we collect in our Games and Application
            </h2>
            <p>
              For every device a Game or Application is installed on we collect
              the following Information: Unique Device Identifier (a unique
              number that lets us tell the devices apart) IP Address (the
              internet address the Game uses to connect to the Internet) MAC
              address (an unique hardware address the device uses to connect to
              the Internet) Device type (e.g. iPad 2, Galaxy S3, etc.); OS
              version (type of operating system and the version thereof); Game
              version (specific Game(s) and the versions thereof); and Length of
              play session. We do not collect any other personally identifying
              information such as e-mail address or user name.
            </p>

            <h2 className="mb-4 mt-8 text-3xl font-bold text-black dark:text-white">
              What third parties collect via our apps
            </h2>
            <p>
              Our apps use Google Analytics (third party scripts) that collect
              the following information and might (also) store such information
              as a cookie on the device you use to access our webpage: Google
              Analytics/Firebase Analytics: Demographics (browser language,
              country, city); System information (browser, OS, service
              provider); Mobile (OS, service provider, screen resolution); Site
              behaviour (which pages users visit, duration of visit);
            </p>

            <h2 className="mb-4 mt-8 text-3xl font-bold text-black dark:text-white">
              How we use this information collected in our Games
            </h2>
            <p>
              We collect this Information to improve performance and reliability
              of our Games and to get a better understanding of what users in
              general prefer. We do not link any of this Information in any way
              to individuals or any other information we might obtain. We do not
              share, sell or in any other way give other persons or companies.
            </p>

            <h2 className="mb-4 mt-8 text-3xl font-bold text-black dark:text-white">
              Web browser cookies
            </h2>
            <p>
              Our Site may use “cookies” to enhance User experience. User&apos;s
              web browser places cookies on their hard drive for record-keeping
              purposes and sometimes to track information about them. User may
              choose to set their web browser to refuse cookies, or to alert you
              when cookies are being sent. If they do so, note that some parts
              of the Site may not function properly.
            </p>

            <h2 className="mb-4 mt-8 text-3xl font-bold text-black dark:text-white">
              Advertising and Analytics Services Provided by Others
            </h2>
            <p>
              We may allow third parties to serve advertisements and provide
              analytics services in connection with our Services. These entities
              may use cookies, web beacons and other tracing technologies to
              collect information about your use of our Services, including your
              IP address, MAC address, device identifiers, software and hardware
              information, browser information, time zone and usage information
            </p>

            <h2 className="mb-4 mt-8 text-3xl font-bold text-black dark:text-white">
              Changes to this privacy policy
            </h2>
            <p>
              Katana Studio has the discretion to update this privacy policy at
              any time. When we do, we will revise the updated date at the
              bottom of this page. We encourage Users to frequently check this
              page for any changes to stay informed about how we are helping to
              protect the personal information we collect. You acknowledge and
              agree that it is your responsibility to review this privacy policy
              periodically and become aware of modifications
            </p>

            <h2 className="mb-4 mt-8 text-3xl font-bold text-black dark:text-white">
              Your acceptance of these terms
            </h2>
            <p>
              By using this Site all products and services offered by Katana
              Studio, you signify your acceptance of this policy. If you do not
              agree to this policy, please do not use our Site and all products
              and services offered by Katana Studio. Your continued use of the
              Site following the posting of changes to this policy will be
              deemed your acceptance of those changes.
            </p>

            <h2 className="mb-4 mt-8 text-3xl font-bold text-black dark:text-white">
              Contacting us
            </h2>
            <p>
              If you have any questions about this Privacy Policy, the practices
              of this site, or your dealings with this site, please contact us
              at:
            </p>
            <Link href="https://katanastudio.net/">
              <p className="underline hover:text-blue-500">Katana Studio</p>
            </Link>
            <p>hello[at]katanastudio.net</p>
            <p>This document was last updated on October 23, 2024</p>
          </motion.div>
        </div>
      </section>
    </div>
  );
};

export default PrivacyPage;
