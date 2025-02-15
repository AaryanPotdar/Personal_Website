"use client";

import {
  AvatarGroup,
  Carousel,
  Column,
  Flex,
  Heading,
  SmartLink,
  Text,
} from "@/once-ui/components";

interface ProjectCardProps {
  link?: string;
  priority?: boolean;
  images: string[];
  title: string;
  content: string;
  description: string;
  avatars: { src: string }[];
  caseStudyText?: string;
}

export const ProjectCard: React.FC<ProjectCardProps> = ({
  images = [],
  title,
  description,
  link,
}) => {
  return (
    <Column fillWidth gap="m">
      {images.length > 0 && (
        <Carousel
          sizes="(max-width: 960px) 100vw, 960px"
          images={images.map((image) => ({
            src: image,
            alt: title,
          }))}
        />
      )}
      <Flex gap="xl" mobileDirection="column">
        <Column flex={5}>
          <Heading as="h2" wrap="balance" variant="heading-strong-xl">
            {title}
          </Heading>
        </Column>
        <Column flex={7} gap="m">
          <Column gap="16">  
            <AvatarGroup avatars={[{ src: "/images/avatar.jpg" }]} size="m" />
            <Text wrap="balance" variant="body-default-m" onBackground="neutral-weak">
              {description}
            </Text>
          </Column>
          <Flex gap="24" wrap>
            {link && (
              <SmartLink
                suffixIcon="arrowUpRightFromSquare"
                style={{ margin: "0", width: "fit-content"}}
                href={link}
              >
                <Text variant="body-default-s" onBackground="brand-medium">View project</Text>
              </SmartLink>
            )}
          </Flex>
        </Column>
      </Flex>
    </Column>
  );
};
