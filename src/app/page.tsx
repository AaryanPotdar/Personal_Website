import React from "react";
import { Heading, Flex, Text, Button, Avatar, Column } from "@/once-ui/components";
import { baseURL } from "@/app/resources";
import { home, person, about } from "@/app/resources/content";

export async function generateMetadata() {
  const title = home.title;
  const description = home.description;
  const ogImage = `https://${baseURL}/og?title=${encodeURIComponent(title)}`;

  return {
    title,
    description,
    openGraph: {
      title,
      description,
      type: "website",
      url: `https://${baseURL}`,
      images: [{ url: ogImage, alt: title }],
    },
    twitter: {
      card: "summary_large_image",
      title,
      description,
      images: [ogImage],
    },
  };
}

export default function Home() {
  return (
    <Column maxWidth="m" gap="xl" horizontal="center">
      <Column fillWidth paddingY="l" gap="m">
        <Column maxWidth="s">
          <Heading wrap="balance" variant="display-strong-l">
            {home.headline}
          </Heading>
          <Text wrap="balance" onBackground="neutral-weak" variant="heading-default-xl" paddingBottom="24">
            {home.subline}
          </Text>

          {/* About Button */}
          <Button
            id="about"
            data-border="rounded"
            href="/about"
            variant="secondary"
            size="m"
            arrowIcon
          >
            <Flex gap="8" vertical="center">
              {about.avatar.display && (
                <Avatar
                  style={{ marginLeft: "-0.75rem", marginRight: "0.25rem" }}
                  src={person.avatar}
                  size="m"
                />
              )}
              {about.title}
            </Flex>
          </Button>

          {/* Featured Section */}
          <Flex fillWidth paddingTop="40" gap="24" direction="column">
            <Heading variant="display-strong-s">Projects</Heading>
            <Flex gap="16" wrap>
              <Button
                href="https://github.com/AaryanPotdar/Loyalty_UI/tree/main/loyalty-app"
                variant="secondary"
                size="m"
              >
                Nom Station Loyalty Program UI
              </Button>
              <Button
                href="https://devpost.com/software/nl2ar"
                variant="secondary"
                size="m"
              >
                speakAR
              </Button>
              <Button
                href="https://touche-2025-rad.dsgt-kaggle.org/"
                variant="secondary"
                size="m"
              >
                Retrieval-Augmented Debating AI
              </Button>
            </Flex>
          </Flex>

          {/* Quick Links */}
          {/* <Flex fillWidth paddingTop="32" gap="16" direction="column">
            <Text variant="heading-strong-s">Quick Links</Text>
            <Flex gap="12" wrap>
              <Button href="/resume.pdf" variant="secondary" size="s" prefixIcon="document">
                Resume
              </Button>
              <Button href="https://cal.com/your-calendar" variant="secondary" size="s" prefixIcon="calendar">
                Schedule a Call
              </Button>
            </Flex>
          </Flex> */}
        </Column>
      </Column>
    </Column>
  );
}
