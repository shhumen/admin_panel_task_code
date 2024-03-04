import React from "react";
import { Modal } from "antd";

interface ModalProps {
  title: string;
  width: number;
  open: boolean;
  content: React.ReactNode;
  onOpenHandler: (open: boolean) => void;
}

// const CustomModal: React.FC<ModalProps> = (props) => {
const CustomModal = (props: ModalProps) => {
  const { content, open, width, title, onOpenHandler } = props;
  return (
    <>
      <Modal
        footer={null}
        title={title}
        centered
        open={open}
        onOk={() => onOpenHandler(false)}
        onCancel={() => onOpenHandler(false)}
        width={width}
      >
        {content}
      </Modal>
    </>
  );
};

export default CustomModal;
