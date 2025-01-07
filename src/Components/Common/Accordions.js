import { BsPlus, BiMinus } from "../../utils/icons";
import { AiFillCaretDown, AiFillCaretRight, AiOutlineCheckCircle, AiOutlineCloseCircle, BsEyeFill, BsEyeSlashFill, FiArrowDownCircle, FiArrowRightCircle, IoIosArrowDown, IoIosArrowForward } from "../../utils/iconsTypes";

const Accordions = ({ accordions, accordionIcon }) => {
	const { upIcon, downIcon, iconColor } = accordionIcon;
	return accordions.map((accordion) => (
		<>
			<dt>
				<span dangerouslySetInnerHTML={{ __html: accordion.title }} />

				<span className="icon">
					{
						accordionIcon?.isIcon && <>
							<span className='expanded'>
								{
									downIcon === "down" && <BiMinus color={iconColor} />
								}

								{
									downIcon === "Second" && <IoIosArrowDown color={iconColor} />
								}

								{
									downIcon === "Four" && <BiMinus color={iconColor} />
								}

								{
									downIcon === "Six" && <FiArrowDownCircle color={iconColor} />
								}

								{
									downIcon === "Eight" && <AiFillCaretDown color={iconColor} />
								}

								{
									downIcon === "Ten" && <BsEyeSlashFill color={iconColor} />
								}

								{
									downIcon === "Twelve" && <AiOutlineCloseCircle color={iconColor} />
								}

							</span>

							<span className='collapsed'>
								{
									upIcon === "up" && <BsPlus color={iconColor} />
								}
								{
									upIcon === "First" && <IoIosArrowForward color={iconColor} />
								}
								{
									upIcon === "Third" && <BsPlus color={iconColor} />
								}
								{
									upIcon === "Five" && <FiArrowRightCircle color={iconColor} />
								}
								{
									upIcon === "Seven" && <AiFillCaretRight color={iconColor} />
								}
								{
									upIcon === "Nine" && <BsEyeFill color={iconColor} />
								}
								{
									upIcon === "Eleven" && <AiOutlineCheckCircle color={iconColor} />
								}
							</span>
						</>
					}
				</span>
			</dt>

			<dd dangerouslySetInnerHTML={{ __html: accordion.content }} />
		</>
	))
};

export default Accordions;
