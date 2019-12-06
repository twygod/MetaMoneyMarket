import React, {HTMLAttributes} from 'react';
import Modal from 'react-modal';
import {Link, useHistory} from 'react-router-dom';
import {Box, Button, Flex, Text} from 'rebass';
import {useWeb3Context} from 'web3-react';
import {modalStyle} from '../../util/constants';
import Metamask from '../common/img/Metamask';
import WalletConnect from '../common/img/WalletConnect';
import ModalTitle from '../modal-title';

interface ProviderButtonTypes extends HTMLAttributes<HTMLButtonElement> {
  icon: React.ReactNode;
}

const ProviderButton: React.FC<ProviderButtonTypes> = ({icon, children, onClick}) => (
  <Button width={1} variant="provider-button" onClick={onClick}>
    <Flex justifyContent="center" alignItems="center">
      {icon}
      <Text ml={[2, 3]}>{children}</Text>
    </Flex>
  </Button>
);

const LoginModal: React.FC<React.ComponentProps<typeof Modal>> = props => {
  const {onRequestClose, ...restProps} = props;
  const context = useWeb3Context();
  const history = useHistory();

  const loginMetamask: React.MouseEventHandler<HTMLButtonElement> = e => {
    context.setConnector('MetaMask');

    if (onRequestClose) {
      onRequestClose(e);
      history.push('/my-account');
    }
  };

  const loginWalletConnect: React.MouseEventHandler<HTMLButtonElement> = e => {
    context.setConnector('WalletConnect');

    if (onRequestClose) {
      onRequestClose(e);
      history.push('/my-account');
    }
  };

  return (
    <Modal {...restProps} style={modalStyle}>
      <ModalTitle title="Login" onRequestClose={onRequestClose} />
      <Box variant="card-inner-small">
        <Box mb={[16 - 2, 24 - 2]}>
          <ProviderButton icon={<WalletConnect />} onClick={loginWalletConnect}>
            Connect with WalletConnect
          </ProviderButton>
        </Box>

        <Box mb={[16 - 2, 24 - 2]}>
          <ProviderButton icon={<Metamask />} onClick={loginMetamask}>
            Connect with MetaMask
          </ProviderButton>
        </Box>

        <Text
          fontSize={12}
          color="muted-darker"
          fontFamily="body"
          fontWeight={600}
          textAlign="center"
          sx={{a: {color: 'inherit'}}}
        >
          By connecting you accept the <Link to="/terms">Terms & Conditions</Link>
        </Text>
      </Box>
    </Modal>
  );
};

export default LoginModal;
