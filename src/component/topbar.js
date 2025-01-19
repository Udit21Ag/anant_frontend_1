import React, { useState } from "react";
import { AbtMenu, PtrnMenu } from "../data/Dropdown.js";
import MenuIcon from "@mui/icons-material/Menu";
import CloseIcon from "@mui/icons-material/Close";

function Topbar() {
	const [dropDown, setDropDown] = useState(null);
	const [disp, setDisp] = useState(true);
	const [abtMenu, setAbtMenu] = useState(true);
	const [ptrnMenu, setPtrnMenu] = useState(true);

	const handleMouseEnter = (menu) => {
		setDropDown(menu);
	};

	const handleMouseLeave = () => {
		setDropDown(null);
	};

	const handleRemove = () => {
		if (disp) {
			setDisp(false);
		} else {
			setDisp(true);
		}
	};

	const handleAbtMenu = () => {
		if (abtMenu) {
			setAbtMenu(false);
		} else {
			setAbtMenu(true);
		}
	};
	const handlePtrnMenu = () => {
		if (ptrnMenu) {
			setPtrnMenu(false);
		} else {
			setPtrnMenu(true);
		}
	};

	return (
		<div className="nav-prop">
			<section className="heading">
				<div style={{ padding: "10px 0 25px 10px" }} className="start">
					<nav className="menu-flex">
						<div className="logo">
							<a href="https://www.veritasium.com/">
								<img
									src="https://images.squarespace-cdn.com/content/v1/53ec3f51e4b0f5d3db27102b/1558639390029-T41BXMDTFBVDBAKFLSKK/veritasium+logo.png?format=1500w"
									alt=""
									className="logo-img"
								></img>
							</a>
						</div>
						<div className="nav-elem">
							<div className="nav-elem-items">
								<a
									href="https://www.veritasium.com/"
									className="nav-link"
								>
									HOME
								</a>
							</div>
							<div className="nav-elem-items">
								<a
									href="https://www.veritasium.com/videos"
									className="nav-link"
								>
									VIDEOS
								</a>
							</div>
							<div className="nav-elem-items">
								<a
									href="https://www.veritasium.com/careers"
									className="nav-link"
								>
									CAREERS
								</a>
							</div>
							<div
								onMouseEnter={() => handleMouseEnter("AbtMenu")}
								onMouseLeave={handleMouseLeave}
								className="nav-elem-items"
							>
								ABOUT
								{dropDown === "AbtMenu" && (
									<div className="dd">
										<div className="dropdown">
											<div className="dd-column">
												{AbtMenu.map((item, index) => (
													<div key={index}>
														<a href={item.link}>
															<div className="dropdown-item">
																{item.label}
															</div>
														</a>
													</div>
												))}
											</div>
										</div>
									</div>
								)}
							</div>
							<div
								onMouseEnter={() =>
									handleMouseEnter("PtrnMenu")
								}
								onMouseLeave={handleMouseLeave}
								className="nav-elem-items"
							>
								PATREON
								{dropDown === "PtrnMenu" && (
									<div className="dd">
										<div className="dropdown">
											<div className="dd-column">
												{PtrnMenu.map((item, index) => (
													<div key={index}>
														<a href={item.link}>
															<div className="dropdown-item">
																{item.label}
															</div>
														</a>
													</div>
												))}
											</div>
										</div>
									</div>
								)}
							</div>
							<div className="nav-elem-items">
								<a
									href="https://snatoms.com/"
									className="nav-link"
								>
									SNATOMS
								</a>
							</div>
							<a
								href="https://www.veritasium.com/contact"
								className="nav-button"
							>
								<button className="contact-button">
									CONTACT
								</button>
							</a>
						</div>
						<div className="nav-elem-resp">
							<div
								className="nav-item-resp"
								onClick={handleRemove}
							>
								<div hidden={!disp}>
									<MenuIcon />
								</div>
								<div hidden={disp}>
									<CloseIcon />
								</div>
							</div>
						</div>
					</nav>
					<main className="tagline">
						<h1 className="tag1">An element of truth</h1>
						<h1 className="tag2">VERITASIUM</h1>
					</main>
				</div>
			</section>
			<div hidden={disp} className="menu-resp">
				<div>
					<div className="menu-items">
						<a
							href="https://www.veritasium.com/"
							className="nav-link-resp"
						>
							HOME
						</a>
					</div>
					<div className="menu-items">
						<a
							href="https://www.veritasium.com/videos"
							className="nav-link-resp"
						>
							VIDEOS
						</a>
					</div>
					<div className="menu-items">
						<a
							href="https://www.veritasium.com/careers"
							className="nav-link-resp"
						>
							CAREERS
						</a>
					</div>
					<div className="menu-items" onClick={handleAbtMenu}>
						<p className="nav-link-resp">ABOUT</p>
					</div>
					<div hidden={abtMenu}>
						{AbtMenu.map((item, index) => (
							<div key={index} className="submenu-items">
								<a href={item.link} className="nav-link-resp">
									{item.label}
								</a>
							</div>
						))}
					</div>
					<div className="menu-items" onClick={handlePtrnMenu}>
						<p className="nav-link-resp">PATREON</p>
					</div>
					<div hidden={ptrnMenu}>
						{PtrnMenu.map((item, index) => (
							<div key={index} className="submenu-items">
								<a href={item.link} className="nav-link-resp">
									{item.label}
								</a>
							</div>
						))}
					</div>
					<div className="menu-items">
						<a
							href="https://snatoms.com/"
							className="nav-link-resp"
						>
							SNATOMS
						</a>
					</div>
					<div className="menu-items">
						<a
							href="https://www.veritasium.com/contact"
							className="nav-link-resp"
						>
							CONTACT
						</a>
					</div>
				</div>
			</div>
		</div>
	);
}

export default Topbar;
