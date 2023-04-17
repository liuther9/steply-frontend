import ModalPortal from "@/shared/components/ModalPortal"
import s from './LoginModal.module.scss'

export default function LoginModal({ show }: { show: boolean }) {
	return <ModalPortal>
		<div className={s.wrapper}></div>
	</ModalPortal>
}