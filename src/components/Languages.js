import React, { Component } from "react";
import { translate } from "react-i18next";
import { connect } from "react-redux";
import { compose } from "redux";
class Languages extends Component {
  render() {
    const { t, i18n } = this.props;

    const changeLanguage = lng => {
      i18n.changeLanguage(lng);
    };
    const selectLang = event => {
      changeLanguage(event.target.value);
    };
    return (
      <div className="px-4 ">
        <select
          style={{ width: "10%" }}
          className="custom-select"
          onChange={selectLang}
        >
          {this.props.selectedLngs.map((x, index) => (
            <option value={x} key={index}>
              {x}
            </option>
          ))}
        </select>
        <h2 className="pt-3">{t("Info")}</h2>
      </div>
    );
  }
}
export default compose(
  translate("translations"),
  connect(state => ({
    ButtonState: state.statusBtn,
    selectedLngs: state.checkLng
  }))
)(Languages);
