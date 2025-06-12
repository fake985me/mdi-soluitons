<template>

	<section class="slide-option">
		<div class="container">
			<h3 class="no-marg">Our customer</h3>
		</div>
		<div id="infinite" class="highway-slider">
			<div class="container highway-barrier">
				<ul class="highway-lane">
					<li class="highway-car"><span><img src="../assets/img/customer/Azbil_Corporation_logo.png"
								alt="Azbil Corporation logo" class="w-[90px]" /></span></li>
					<li class="highway-car"><span><img src="../assets/img/customer/mora.png"
								alt="Azbil Corporation logo" class="w-[120px]" /></span></li>
					<li class="highway-car"><span><img src="../assets/img/customer/Azbil_Corporation_logo.png"
								alt="Azbil Corporation logo" class="w-[90px]" /></span></li>
					<li class="highway-car"><span><img src="../assets/img/customer/mora.png"
								alt="Azbil Corporation logo" class="w-[120px]" /></span></li>
					<li class="highway-car"><span><img src="../assets/img/customer/Azbil_Corporation_logo.png"
								alt="Azbil Corporation logo" class="w-[90px]" /></span></li>
					<li class="highway-car"><span><img src="../assets/img/customer/mora.png"
								alt="Azbil Corporation logo" class="w-[120px]" /></span></li>
					<li class="highway-car"><span><img src="../assets/img/customer/mora.png"
								alt="Azbil Corporation logo" class="w-[120px]" /></span></li>

					<li class="highway-car"><span><img src="../assets/img/customer/mora.png"
								alt="Azbil Corporation logo" class="w-[120px]" /></span></li>

					<li class="highway-car"><span><img src="../assets/img/customer/mora.png"
								alt="Azbil Corporation logo" class="w-[120px]" /></span></li>

					<li class="highway-car"><span><img src="../assets/img/customer/mora.png"
								alt="Azbil Corporation logo" class="w-[120px]" /></span></li>
					<li class="highway-car"><span><img src="../assets/img/customer/mora.png"
								alt="Azbil Corporation logo" class="w-[120px]" /></span></li>
					<li class="highway-car"><span><img src="../assets/img/customer/mora.png"
								alt="Azbil Corporation logo" class="w-[120px]" /></span></li>
					<li class="highway-car"><span><img src="../assets/img/customer/mora.png"
								alt="Azbil Corporation logo" class="w-[120px]" /></span></li>
					<li class="highway-car"><span><img src="../assets/img/customer/mora.png"
								alt="Azbil Corporation logo" class="w-[120px]" /></span></li>
					<li class="highway-car"><span><img src="../assets/img/customer/mora.png"
								alt="Azbil Corporation logo" class="w-[120px]" /></span></li>

				</ul>
			</div>
		</div>
	</section>
</template>

<script setup>
</script>

<style>
section {
	display: flex;
	flex-flow: column;
	align-items: center;

	div.container {
		transition: all .3s ease;

		h1 {
			margin: 15px 0 0 0;
		}

		h3 {
			margin: 0 0 25px 0;
		}
	}

	@media (max-width:992px) {
		padding: 0 20px 0 20px;
	}
}

section.slide-option {
	margin: 0 0 10px 0;

	.no-marg {
		margin: 0 0 0 0;
	}
}

div.highway-slider {
	display: flex;
	justify-content: center;
	width: 100%;
	height: 150px;

	div.highway-barrier {
		overflow: hidden;
		position: relative;
	}

	ul.highway-lane {
		display: flex;
		height: 100%;

		li.highway-car {
			flex: 1;
			display: flex;
			justify-content: center;
			align-items: center;
		}
	}
}

@keyframes translatestf {
	0% {
		transform: translateX(100%);
	}

	100% {
		transform: translateX(-500%);
	}
}

#stffull div.highway-barrier {
	ul.highway-lane {
		width: 500%;

		li.highway-car {
			animation: translatestf 30s linear infinite;

			h4 {
				font-size: 28px;
			}
		}
	}
}

@keyframes translateinfinite {
	100% {
		transform: translateX(calc(-180px * 12));
	}
}

#infinite div.highway-barrier {

	/* box-shadow:0 3px 10px -3px rgba(0,0,0,0.3); */
	&::before,
	&::after {
		content: " ";
		position: absolute;
		z-index: 9;
		width: 180px;
		height: 100%;
	}

	/* &::before {
		top:0;left:0;
		background: linear-gradient(to right, rgba(255,255,255,1) 0%, rgba(255,255,255,0) 100%);
	}
	&::after {
		top:0;right:0;
		background: linear-gradient(to left, rgba(255,255,255,1) 0%, rgba(255,255,255,0) 100%);
	} */
	ul.highway-lane {
		width: calc(180px * 24);

		li.highway-car {
			width: 180px;
			animation: translateinfinite 25s linear infinite;

			span {
				font-size: 65px;
			}
		}
	}
}
</style>