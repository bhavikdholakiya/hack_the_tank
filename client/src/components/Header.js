import {
  createStyles,
  Box,
  Button,
  Group,
  Header,
  Image,
  Burger,
  ActionIcon,
  Avatar,
  Text,
  Menu,
} from "@mantine/core";
import { useDisclosure, useHotkeys } from "@mantine/hooks";
import { Link } from "react-router-dom";
import { BsMoonStars } from "react-icons/bs";
import { TbSun } from "react-icons/tb";
import { IoChevronDown } from "react-icons/io5";
import { useDispatch, useSelector } from "react-redux";
import { useMemo } from "react";
import { refreshToken, logout } from "../redux/slices/authSlice";
import { getCartItemsNumber } from "../redux/slices/cartSlice";
import { HiOutlineUser } from "react-icons/hi";
import { IoIosLogOut } from "react-icons/io";
import SkeletonHeader from "./Skeletons/SkeletonHeader";
import BagButtonWrapper from "./BagButton/BagButtonWrapper";
import './temp2.css';
const useStyles = createStyles((theme) => ({
  root: {
    position: "relative",
    zIndex: 999,
  },
  dropdown: {
    position: "absolute",
    top: 60,
    right: 10,
    width: 300,
    padding: theme.spacing.md,
    backgroundColor: theme.colorScheme === "dark" ? "#292c2f" : "#fff",
  },
  hiddenMobile: {
    [theme.fn.smallerThan("sm")]: {
      display: "none",
    },
  },

  hiddenDesktop: {
    [theme.fn.largerThan("sm")]: {
      display: "none",
    },
  },
}));

const MainHeader = ({ onToggleColorScheme }) => {
  const { classes } = useStyles();
  const dispatch = useDispatch();
  const { user, isRefreshingToken } = useSelector((state) => state.auth);
  const loggedUser = Boolean(localStorage.getItem("isAuthenticated"));

  useMemo(() => {
    dispatch(refreshToken());
    dispatch(getCartItemsNumber());
    setInterval(() => {
      dispatch(refreshToken());
    }, 5 * 60 * 1000);
  }, [dispatch]);

  const [opened, { toggle, close }] = useDisclosure(false);

  useHotkeys([
    [
      "mod+J",
      (e) => {
        e.preventDefault(); // Prevents Chrome from opening the downloads panel when the Control and J keys are pressed together.
        onToggleColorScheme();
      },
    ],
  ]);

  return (
    <Box sx={{ position: "relative", zIndex: 999 }}>
      <Header
        sx={(theme) => ({
          backgroundColor: theme.colorScheme === "dark" ? "#292c2f" : "#fff",
        })}
        height={60}
        px="md"
      >
        <Group position="apart" sx={{ height: "100%" }}>
          <Link to="/">
            <Image
              width={60}
              height={60}
              src="data:image/jpeg;base64,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"
            />
          </Link>
          <Button variant="outlined" color="error">
          <Link to="/bhavik" style={{textDecoration:"none"}}>SubscriptionPlans</Link>
      </Button>
          <Group>
            <Group>
              <ActionIcon
                sx={(theme) => ({
                  color: theme.colorScheme === "dark" ? "yellow" : "#3b5bdb",
                })}
                onClick={() => onToggleColorScheme()}
                size="lg"
              >
                {localStorage.getItem("colorScheme") === "dark" ? (
                  <TbSun size={18} />
                ) : (
                  <BsMoonStars size={18} />
                )}
              </ActionIcon>
              <BagButtonWrapper />
            </Group>
            <Group className={classes.hiddenMobile}>
              {!loggedUser && Object?.entries(user)?.length === 0 && (
                <>
                  <Link to="/auth/login">
                    <Button variant="default">Log in</Button>
                  </Link>
                  <Link to="/auth/register">
                    <Button>Register</Button>
                  </Link>
                </>
              )}
            </Group>
            <Menu
              opened={opened}
              transition="pop-top-right"
              position="bottom-start"
              offset={10}
              transitionDuration={200}
            >
              {isRefreshingToken &&
                loggedUser &&
                Object?.entries(user)?.length === 0 && (
                  <Menu.Target>
                    <SkeletonHeader />
                  </Menu.Target>
                )}
              {!loggedUser && Object?.entries(user)?.length === 0 && (
                <Menu.Target>
                  <Burger
                    opened={opened}
                    onClick={toggle}
                    className={classes.hiddenDesktop}
                  />
                </Menu.Target>
              )}
              {!isRefreshingToken && Object?.entries(user)?.length > 0 && (
                <Menu.Target>
                  <Group
                    sx={{
                      cursor: "pointer",
                    }}
                    spacing={7}
                    onClick={toggle}
                  >
                    <Avatar
                      src={
                        user?.loginType === "google"
                          ? user?.google?.picture
                          : user?.loginType === "facebook"
                          ? user?.facebook?.picture
                          : user?.avatar?.url
                      }
                      radius="xl"
                      size={30}
                    />
                    <Text
                      className={classes.hiddenMobile}
                      weight={500}
                      size="sm"
                      sx={{ lineHeight: 1 }}
                      mr={3}
                    >
                      {user?.loginType === "google"
                        ? user?.google?.name
                        : user?.loginType === "facebook"
                        ? user?.facebook?.name
                        : `${user?.firstName} ${user?.lastName}`}
                    </Text>
                    <IoChevronDown size={12} />
                  </Group>
                </Menu.Target>
              )}

              {!loggedUser && Object?.entries(user)?.length === 0 && (
                <Menu.Dropdown py="md">
                  <Link
                    style={{
                      textDecoration: "none",
                    }}
                    to="/auth/login"
                    onClick={() => close()}
                  >
                    <Menu.Item>
                      <Button variant="default">Log In</Button>
                    </Menu.Item>
                  </Link>
                  <Link
                    style={{
                      textDecoration: "none",
                    }}
                    to="/auth/register"
                    onClick={() => close()}
                  >
                    <Menu.Item>
                      <Button>Register</Button>
                    </Menu.Item>
                  </Link>
                </Menu.Dropdown>
              )}
              {!isRefreshingToken && Object?.entries(user)?.length > 0 && (
                <Menu.Dropdown py="md">
                  <Menu.Label>User Profile</Menu.Label>
                  <Link
                    style={{
                      textDecoration: "none",
                    }}
                    to={`/profile/${user?._id}`}
                    onClick={() => close()}
                  >
                    <Menu.Item icon={<HiOutlineUser />}>Profile</Menu.Item>
                  </Link>
                  <Menu.Label>Danger Zone</Menu.Label>
                  <Menu.Item
                    onClick={() => {
                      close();
                      dispatch(logout());
                    }}
                    icon={<IoIosLogOut />}
                    color="red"
                  >
                    Log Out
                  </Menu.Item>
                </Menu.Dropdown>
              )}
            </Menu>
          </Group>
        </Group>
      </Header>
    </Box>
  );
};

export default MainHeader;
