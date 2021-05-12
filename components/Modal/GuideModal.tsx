import {
  Alert,
  AlertIcon,
  Button,
  Heading,
  HStack,
  Modal,
  ModalBody,
  ModalCloseButton,
  ModalContent,
  ModalFooter,
  ModalHeader,
  ModalOverlay,
  Text,
  VStack,
} from '@chakra-ui/react';
import { Dispatch, memo, ReactNode, SetStateAction } from 'react';
import { IoBulb } from 'react-icons/io5';

type AccessibleEmojiProps = {
  label: string;
  emoji: string;
  text: string;
};

type ModalSectionProps = {
  header: string;
  children: ReactNode;
};

type Props = {
  open: boolean;
  setOpen: Dispatch<SetStateAction<boolean>>;
};

const ModalSection = ({ header, children }: ModalSectionProps) => (
  <VStack align="start">
    <Heading size="md" fontWeight="600">
      {header}
    </Heading>

    {children}
  </VStack>
);

const AccessibleEmoji = ({ label, emoji, text }: AccessibleEmojiProps) => (
  <HStack spacing={3}>
    <span aria-label={label} role="img">
      {emoji}
    </span>
    <Text>{text}</Text>
  </HStack>
);

const GuideModal = ({ open, setOpen }: Props) => (
  <Modal
    isOpen={open}
    onClose={() => setOpen(false)}
    size="5xl"
    motionPreset="slideInBottom"
    scrollBehavior="inside"
  >
    <ModalOverlay />
    <ModalContent as="div">
      <ModalHeader>About Fumino OSS</ModalHeader>
      <ModalCloseButton />

      <ModalBody>
        <VStack align="stretch" spacing={4}>
          <Alert status="success" variant="left-accent">
            <AlertIcon />
            This is a guide to use this application to the maximum!
          </Alert>

          <ModalSection header="What?">
            <Text>
              Fumino is an OSS (Open Source Software) web application to keep track of your
              happiness everyday. No registration or advertisements, costs are funded from my
              pocket, free of charge.
            </Text>
          </ModalSection>

          <ModalSection header="Who?">
            <Text>This application is dedicated to you, the user of this application.</Text>
          </ModalSection>

          <ModalSection header="Why?">
            <Text>
              In order for us to be grateful with what we have (or had), it is essential for us to
              remember them. These days, most of people are diagnosed with what they call
              &lsquo;Seasonal Affective Disorder&rsquo;, which is a form of mood-swings that occurs
              randomly throughout the year.
            </Text>

            <Text>
              According to National Institute of Health (USA), SAD is a seasonal depression that
              affects close to 10 million Americans!
            </Text>

            <Text>
              Another research by Medline Plus (USA), SAD occurs in 0.5 to 3 percent of individuals
              in the entire population!
            </Text>

            <Text>
              Being happy is extremely detrimental to your mental health. One good thing a day keeps
              depression away.
            </Text>
          </ModalSection>

          <ModalSection header="When?">
            <Text>
              You can use this application anytime you feel like it. You are truly in control here!
            </Text>
          </ModalSection>

          <ModalSection header="Where?">
            <Text>
              Same as above, you can use this application anywhere you feel like it. At a library?
              Sure. At your room, with your laptop? Excellent. At a public place? Cool.
            </Text>
          </ModalSection>

          <ModalSection header="How?">
            <Text>
              The recommended way of using this Open Source Happiness Jar actually follows from what
              Elizabeth Gilbert (the creator of this idea) has recommended.
            </Text>

            <AccessibleEmoji
              label="Smile"
              emoji="😀"
              text="First off, remember a good thing when using this application!"
            />

            <AccessibleEmoji
              label="Rocket"
              emoji="🚀"
              text="Then, click on the 'Blessings' in the header!"
            />

            <AccessibleEmoji
              label="Waving"
              emoji="👋"
              text="Edit your name by clicking on the 'Dreamer' name in the configurations!"
            />

            <AccessibleEmoji
              label="Chat"
              emoji="🗨️"
              text="Click on the 'Add Data' and start adding your good thing for today!"
            />

            <AccessibleEmoji
              label="Rainbow"
              emoji="🌈"
              text="Don't forget to make it colorful by choosing one of the available colors!"
            />

            <AccessibleEmoji
              label="Sparkles"
              emoji="✨"
              text="You are done filling the data! Hopefully that activity itself was enjoyable!"
            />

            <AccessibleEmoji
              label="Disc"
              emoji="📀"
              text="Back up your data by using the 'Manage Data' function! Store it anywhere!"
            />

            <AccessibleEmoji
              label="One"
              emoji="🕐"
              text="It is recommended to do this once a day, not more, not less!"
            />

            <AccessibleEmoji
              label="Heart"
              emoji="❤️"
              text="When you are feeling down, read your happiness note again!"
            />

            <AccessibleEmoji
              label="Wrench"
              emoji="🔧"
              text="Don't forget to play around with the configurations!"
            />

            <AccessibleEmoji
              label="Question"
              emoji="🙋"
              text="If you have any issues or questions, let me know in GitHub!"
            />
          </ModalSection>

          <ModalSection header="Credits">
            <Text>
              Feel free to check for the credits in the GitHub repository (link on the footer)! As a
              disclaimer, I do not collect any data. This application is powered by your
              browser&quot;s local storage. No data are sent to any servers!
            </Text>
          </ModalSection>
        </VStack>
      </ModalBody>

      <ModalFooter>
        <Button
          colorScheme="green"
          type="submit"
          leftIcon={<IoBulb />}
          onClick={() => setOpen(false)}
        >
          I understand!
        </Button>
      </ModalFooter>
    </ModalContent>
  </Modal>
);

export default memo(GuideModal);
