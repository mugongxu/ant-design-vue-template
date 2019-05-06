/*
 * 按需引入 Ant Design Vue UI 组件
 * 按需引入并自定义主题时, 直接从 UI 库中导入组件可避免导入默认样式（配置查看babelrc文件）
 * 参考: https://github.com/vueComponent/ant-design-vue/blob/master/components/index.js
 */
import {
  version,
  // install,
  message,
  notification,
  Affix,
  Anchor,
  AutoComplete,
  Alert,
  Avatar,
  BackTop,
  Badge,
  Breadcrumb,
  Button,
  Calendar,
  Card,
  Collapse,
  Carousel,
  Cascader,
  Checkbox,
  Col,
  DatePicker,
  Divider,
  Dropdown,
  Form,
  Icon,
  Input,
  InputNumber,
  Layout,
  List,
  LocaleProvider,
  Menu,
  Modal,
  Pagination,
  Popconfirm,
  Popover,
  Progress,
  Radio,
  Rate,
  Row,
  Select,
  Slider,
  Spin,
  Steps,
  Switch,
  Table,
  Transfer,
  Tree,
  TreeSelect,
  Tabs,
  Tag,
  TimePicker,
  Timeline,
  Tooltip,
  Upload,
  Drawer,
  Skeleton,
  Comment,
  ConfigProvider
} from 'ant-design-vue';

export default {
    install(V) {
        V.use(version);
        // V.use(install);
        V.use(message);
        V.use(notification);
        V.use(Affix);
        V.use(Anchor);
        V.use(AutoComplete);
        V.use(Alert);
        V.use(Avatar);
        V.use(BackTop);
        V.use(Badge);
        V.use(Breadcrumb);
        V.use(Button);
        V.use(Calendar);
        V.use(Card);
        V.use(Collapse);
        V.use(Carousel);
        V.use(Cascader);
        V.use(Checkbox);
        V.use(Col);
        V.use(DatePicker);
        V.use(Divider);
        V.use(Dropdown);
        V.use(Form);
        V.use(Icon);
        V.use(Input);
        V.use(InputNumber);
        V.use(Layout);
        V.use(List);
        V.use(LocaleProvider);
        V.use(Menu);
        V.use(Modal);
        V.use(Pagination);
        V.use(Popconfirm);
        V.use(Popover);
        V.use(Progress);
        V.use(Radio);
        V.use(Rate);
        V.use(Row);
        V.use(Select);
        V.use(Slider);
        V.use(Spin);
        V.use(Steps);
        V.use(Switch);
        V.use(Table);
        V.use(Transfer);
        V.use(Tree);
        V.use(TreeSelect);
        V.use(Tabs);
        V.use(Tag);
        V.use(TimePicker);
        V.use(Timeline);
        V.use(Tooltip);
        V.use(Upload);
        V.use(Drawer);
        V.use(Skeleton);
        V.use(Comment);
        V.use(ConfigProvider);

        /* eslint no-param-reassign: 0 */
        V.prototype.$message = message;
        V.prototype.$notification = notification;
        V.prototype.$info = Modal.info;
        V.prototype.$success = Modal.success;
        V.prototype.$error = Modal.error;
        V.prototype.$warning = Modal.warning;
        V.prototype.$confirm = Modal.confirm;
    }
};