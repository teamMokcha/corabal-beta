import React, { ReactElement } from "react";
import { View } from "react-native";
import { Text } from "@Components";
import RNModal from "react-native-modal";
import styles from "./modal.styles";

type ModalProps = {
  isVisible: boolean;
  children: React.ReactNode;
  [x: string]: any;
};

export default function Modal({ isVisible = false, children, ...props }: ModalProps): ReactElement {
  return (
    <RNModal
      isVisible={isVisible}
      animationInTiming={1000}
      animationOutTiming={1000}
      backdropTransitionInTiming={800}
      backdropTransitionOutTiming={800}
      {...props}
    >
      {children}
    </RNModal>
  );
}

const ModalContainer = ({ children }: { children: React.ReactNode }) => (
  <View style={styles.container}>{children}</View>
);

const ModalHeader = ({ title }: { title: string }) => (
  <View style={styles.header}>
    <Text style={styles.text}>{title}</Text>
  </View>
);

const ModalBody = ({ children }: { children?: React.ReactNode }) => (
  <View style={styles.body}>{children}</View>
);

const ModalFooter = ({ children }: { children?: React.ReactNode }) => (
  <View style={styles.footer}>{children}</View>
);

Modal.Header = ModalHeader;
Modal.Container = ModalContainer;
Modal.Body = ModalBody;
Modal.Footer = ModalFooter;
